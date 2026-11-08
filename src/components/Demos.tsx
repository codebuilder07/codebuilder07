import { useEffect, useState } from "react";
import { cn } from "../utils/cn";

const money = (n: number) => "$" + Math.round(n).toLocaleString();

/* ───────────── 1. FinOps savings calculator ───────────── */
export function FinOpsDemo() {
  const [spend, setSpend] = useState(120000);
  const [pct, setPct] = useState(25);
  const saved = (spend * pct) / 100;
  const after = spend - saved;
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-xl">💰</span>
        <h3 className="font-semibold">FinOps savings estimator</h3>
      </div>
      <p className="mt-1 text-sm text-slate-500">
        Defaults mirror the Transocean result: a 25% compute cut returned about $30K a year.
      </p>

      <label className="mt-5 block text-sm font-medium text-slate-700">
        Annual compute spend: <span className="font-semibold text-slate-900">{money(spend)}</span>
        <input
          type="range"
          min={20000}
          max={600000}
          step={5000}
          value={spend}
          onChange={(e) => setSpend(+e.target.value)}
          className="mt-2 w-full accent-emerald-600"
        />
      </label>
      <label className="mt-4 block text-sm font-medium text-slate-700">
        Reduction from design-level optimization: <span className="font-semibold text-slate-900">{pct}%</span>
        <input
          type="range"
          min={5}
          max={40}
          value={pct}
          onChange={(e) => setPct(+e.target.value)}
          className="mt-2 w-full accent-emerald-600"
        />
      </label>

      <div className="mt-6 space-y-2">
        <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
          <div className="h-full rounded-full bg-slate-300 transition-all duration-500" style={{ width: "100%" }} />
        </div>
        <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all duration-500"
            style={{ width: `${100 - pct}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-slate-500">
          <span>Before {money(spend)}</span>
          <span>After {money(after)}</span>
        </div>
      </div>

      <div className="mt-auto pt-6">
        <div className="rounded-xl bg-emerald-50 p-4 text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700">Saved every year</div>
          <div className="font-display mt-1 text-4xl font-semibold text-emerald-800">{money(saved)}</div>
          <div className="mt-1 text-xs text-emerald-700">{money(saved * 3)} over three years</div>
        </div>
      </div>
    </div>
  );
}

/* ───────────── 2. Time-to-insight race ───────────── */
export function LatencyDemo() {
  const [run, setRun] = useState(0);
  const [go, setGo] = useState(false);
  useEffect(() => {
    setGo(false);
    const t = setTimeout(() => setGo(true), 80);
    return () => clearTimeout(t);
  }, [run]);

  const stages = ["Source", "Bronze", "Silver", "Gold", "Dashboard"];
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-xl">⏱️</span>
        <h3 className="font-semibold">Time to insight</h3>
      </div>
      <p className="mt-1 text-sm text-slate-500">
        How long a business user waited for fresh numbers, before and after the new platform.
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <div className="mb-1.5 flex justify-between text-sm">
            <span className="font-medium text-slate-700">Before: nightly batch</span>
            <span className="font-semibold text-slate-900">24 hours</span>
          </div>
          <div className="h-4 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-slate-400"
              style={{ width: go ? "100%" : "0%", transition: "width 2.4s cubic-bezier(.2,.7,.2,1)" }}
            />
          </div>
        </div>
        <div>
          <div className="mb-1.5 flex justify-between text-sm">
            <span className="font-medium text-slate-700">After: real-time pipelines</span>
            <span className="font-semibold text-emerald-700">&lt; 15 minutes</span>
          </div>
          <div className="h-4 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-emerald-500"
              style={{ width: go ? "1.04%" : "0%", minWidth: go ? 6 : 0, transition: "width 0.3s ease 0.3s" }}
            />
          </div>
        </div>
      </div>

      <div className="mt-7 flex items-center justify-between gap-1">
        {stages.map((s, i) => (
          <div key={s} className="flex flex-1 items-center">
            <div
              className={cn(
                "flex-1 rounded-lg border px-1 py-2 text-center text-[11px] font-medium transition-all duration-500",
                go ? "border-emerald-300 bg-emerald-50 text-emerald-800" : "border-slate-200 bg-slate-50 text-slate-400",
              )}
              style={{ transitionDelay: `${i * 180}ms` }}
            >
              {s}
            </div>
            {i < stages.length - 1 && <span className="px-0.5 text-slate-300">›</span>}
          </div>
        ))}
      </div>

      <div className="mt-auto flex items-end justify-between pt-6">
        <div>
          <div className="font-display text-3xl font-semibold text-slate-900">~99% faster</div>
          <div className="text-xs text-slate-500">15+ pipelines · 100 GB+/day · 50+ users</div>
        </div>
        <button
          onClick={() => setRun((r) => r + 1)}
          className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Replay ↻
        </button>
      </div>
    </div>
  );
}

/* ───────────── 3. Agent orchestration walkthrough ───────────── */
const steps = [
  { agent: "Router agent", icon: "🧭", text: "Understands the request and picks the right specialists.", tool: null },
  { agent: "Vision agent", icon: "👁️", text: "Reads the photo: hydraulic leak on pump 3, moderate severity.", tool: "Multimodal model" },
  { agent: "Maintenance agent", icon: "🛠️", text: "Opens a work order and finds the next available crew slot.", tool: "MCP · maintenance system" },
  { agent: "Compliance agent", icon: "🔒", text: "Checks the procedure and records the incident for audit.", tool: "MCP · incident register" },
  { agent: "Reply", icon: "💬", text: "Work order #A-2041 created. Crew assigned for tomorrow 08:00. Incident logged.", tool: null },
];

export function AgentDemo() {
  const [step, setStep] = useState(-1);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    if (step >= steps.length - 1) {
      setPlaying(false);
      return;
    }
    const t = setTimeout(() => setStep((s) => s + 1), 900);
    return () => clearTimeout(t);
  }, [playing, step]);

  const start = () => {
    setStep(0);
    setPlaying(true);
  };

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-xl">🤖</span>
        <h3 className="font-semibold">Multi-agent task, step by step</h3>
      </div>
      <p className="mt-1 text-sm text-slate-500">
        An illustrative walkthrough of how the assistant turns one message into finished work.
      </p>

      <div className="mt-4 flex items-start gap-2 rounded-xl bg-slate-100 p-3 text-sm">
        <span>🧑‍🔧</span>
        <span className="text-slate-700">
          “Pump 3 is leaking. Here's a photo. Please log it and book maintenance.”
          <span className="ml-1 text-slate-400">📷 voice + image</span>
        </span>
      </div>

      <ol className="mt-4 space-y-2">
        {steps.map((s, i) => {
          const visible = i <= step;
          return (
            <li
              key={s.agent}
              className={cn(
                "rounded-xl border p-3 text-sm transition-all duration-300",
                visible ? "pop-in border-emerald-200 bg-emerald-50/60" : "border-dashed border-slate-200 opacity-40",
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-medium text-slate-800">
                  {s.icon} {s.agent}
                </span>
                {visible && s.tool && (
                  <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-emerald-700 ring-1 ring-emerald-200">
                    {s.tool}
                  </span>
                )}
              </div>
              {visible && <p className="mt-1 text-slate-600">{s.text}</p>}
            </li>
          );
        })}
      </ol>

      <div className="mt-auto flex items-center justify-between pt-5">
        <span className="text-xs text-slate-500">4,100+ people · +30% efficiency · −10% incidents</span>
        <button
          onClick={start}
          disabled={playing}
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 disabled:opacity-50"
        >
          {step < 0 ? "Run the demo ▶" : playing ? "Working…" : "Run again ↻"}
        </button>
      </div>
    </div>
  );
}
