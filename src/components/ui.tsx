import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../utils/cn";

export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, seen };
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, seen } = useInView<HTMLDivElement>(0.1);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", seen && "in", className)}
    >
      {children}
    </div>
  );
}

export function CountUp({
  value,
  suffix = "",
  duration = 1400,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const { ref, seen } = useInView<HTMLSpanElement>(0.4);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, value, duration]);
  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  dark = false,
  className,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-16 py-20 sm:py-24",
        dark ? "bg-slate-950 text-slate-100" : "",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p
            className={cn(
              "text-xs font-semibold uppercase tracking-[0.2em]",
              dark ? "text-emerald-400" : "text-emerald-700",
            )}
          >
            {eyebrow}
          </p>
          <h2 className="font-display mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
            {title}
          </h2>
          {intro && (
            <p className={cn("mt-4 max-w-2xl text-base leading-relaxed", dark ? "text-slate-300" : "text-slate-600")}>
              {intro}
            </p>
          )}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700",
        className,
      )}
    >
      {children}
    </span>
  );
}
