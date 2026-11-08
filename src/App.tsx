import { useEffect, useState } from "react";
import { cn } from "./utils/cn";
import Portfolio from "./components/Portfolio";
import Resumes from "./components/Resumes";
import { profile } from "./data/content";

type Page = "portfolio" | "resumes";

const links = [
  { href: "#achievements", label: "Achievements" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#ai", label: "AI" },
  { href: "#value", label: "Why me" },
  { href: "#ideas", label: "Ideas" },
  { href: "#contact", label: "Contact" },
];

const pageFromHash = (): Page => (window.location.hash === "#/resumes" ? "resumes" : "portfolio");

export default function App() {
  const [page, setPage] = useState<Page>(pageFromHash);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onHash = () => {
      if (window.location.hash === "#/resumes") setPage("resumes");
      else if (window.location.hash === "#/" || window.location.hash === "") setPage("portfolio");
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const go = (p: Page) => {
    setPage(p);
    setOpen(false);
    window.history.replaceState(null, "", p === "resumes" ? "#/resumes" : "#/");
    window.scrollTo({ top: 0 });
  };

  const goSection = (href: string) => {
    setOpen(false);
    if (page !== "portfolio") {
      setPage("portfolio");
      setTimeout(() => document.querySelector(href)?.scrollIntoView(), 50);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <header className="no-print sticky top-0 z-30 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
          <button onClick={() => go("portfolio")} className="flex items-center gap-2 text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-400 text-sm font-bold text-slate-950">
              NJ
            </span>
            <span className="hidden text-sm font-semibold sm:inline">{profile.name}</span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => goSection(l.href)}
                className="rounded-md px-3 py-1.5 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => go(page === "resumes" ? "portfolio" : "resumes")}
              className={cn(
                "rounded-lg px-3.5 py-1.5 text-sm font-semibold transition",
                page === "resumes"
                  ? "border border-white/20 text-white hover:bg-white/10"
                  : "bg-emerald-400 text-slate-950 hover:bg-emerald-300",
              )}
            >
              {page === "resumes" ? "← Portfolio" : "Resumes"}
            </button>
            <button
              className="rounded-md p-2 text-slate-300 hover:bg-white/10 lg:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-white/10 px-5 pb-3 lg:hidden">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => goSection(l.href)}
                className="block w-full py-2 text-left text-sm text-slate-300"
              >
                {l.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {page === "portfolio" ? <Portfolio onResume={() => go("resumes")} /> : <Resumes />}

      <footer className="no-print bg-slate-950 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {profile.name} · Built with React
      </footer>
    </div>
  );
}
