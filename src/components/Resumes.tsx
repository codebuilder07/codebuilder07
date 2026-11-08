import { useState } from "react";
import { cn } from "../utils/cn";
import { profile } from "../data/content";
import { resumes, type Resume } from "../data/resumes";

function toText(r: Resume) {
  const L: string[] = [];
  L.push(profile.name.toUpperCase());
  L.push(`${r.headline} | ${r.subtitle}`);
  L.push(`${profile.email} | ${profile.phone} | ${profile.linkedinLabel} | ${profile.githubLabel} | ${profile.credlyLabel}`);
  L.push("", "SUMMARY", r.summary);
  L.push("", "KEY ACHIEVEMENTS", ...r.achievements.map((a) => `- ${a}`));
  L.push("", "SKILLS", ...r.skills.map((s) => `${s.label}: ${s.items}`));
  L.push("", "EXPERIENCE");
  r.roles.forEach((x) => {
    L.push(`${x.title} | ${x.org} | ${x.period} | ${x.place}`);
    if (x.intro) L.push(x.intro);
    x.bullets.forEach((b) => L.push(`- ${b}`));
    L.push("");
  });
  L.push("EDUCATION");
  r.education.forEach((e) => {
    L.push(`${e.title} | ${e.where} | ${e.date}`);
    e.bullets.forEach((b) => L.push(`- ${b}`));
  });
  L.push("", "CERTIFICATIONS & AWARDS", ...r.certs.map((c) => `- ${c}`));
  return L.join("\n");
}

function H({ children }: { children: string }) {
  return (
    <h3 className="mt-5 mb-2 border-b border-slate-300 pb-1 text-[11px] font-bold tracking-[0.16em] text-slate-800 uppercase">
      {children}
    </h3>
  );
}

function Sheet({ r }: { r: Resume }) {
  return (
    <article className="resume-sheet mx-auto max-w-[820px] rounded-lg border border-slate-200 bg-white p-8 text-[13px] leading-relaxed text-slate-800 shadow-lg sm:p-12">
      <header className="text-center">
        <h2 className="font-display text-3xl font-bold tracking-wide text-slate-900">
          {profile.name.toUpperCase()}
        </h2>
        <p className="mt-1 text-sm font-semibold text-emerald-800">{r.headline}</p>
        <p className="text-xs text-slate-500">{r.subtitle}</p>
        <p className="mt-2 text-xs text-slate-600">
          {profile.email} · {profile.phone} · {profile.linkedinLabel} · {profile.githubLabel}
        </p>
        <p className="text-xs text-slate-600">
          {profile.location} · {profile.credlyLabel}
        </p>
      </header>

      <H>Professional Summary</H>
      <p>{r.summary}</p>

      <H>Key Achievements</H>
      <ul className="list-disc space-y-1 pl-5">
        {r.achievements.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>

      <H>Skills</H>
      <ul className="space-y-1">
        {r.skills.map((s) => (
          <li key={s.label}>
            <strong>{s.label}:</strong> {s.items}
          </li>
        ))}
      </ul>

      <H>Professional Experience</H>
      <div className="space-y-4">
        {r.roles.map((x) => (
          <div key={x.title + x.org} className="avoid-break">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <div>
                <span className="font-bold text-slate-900">{x.title}</span>
                <span className="text-slate-600"> · {x.org}</span>
              </div>
              <div className="text-xs font-semibold whitespace-nowrap text-slate-600">{x.period}</div>
            </div>
            <div className="text-xs text-slate-500">{x.place}</div>
            {x.intro && <p className="mt-1 italic text-slate-600">{x.intro}</p>}
            <ul className="mt-1 list-disc space-y-1 pl-5">
              {x.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <H>Education</H>
      <div className="space-y-3">
        {r.education.map((e) => (
          <div key={e.title} className="avoid-break">
            <div className="flex flex-wrap justify-between gap-x-3">
              <div>
                <span className="font-bold text-slate-900">{e.title}</span>
                <span className="text-slate-600"> · {e.where}</span>
              </div>
              <div className="text-xs font-semibold text-slate-600">{e.date}</div>
            </div>
            <ul className="list-disc space-y-0.5 pl-5">
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <H>Certifications & Awards</H>
      <ul className="list-disc space-y-0.5 pl-5">
        {r.certs.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </article>
  );
}

export default function Resumes({ initial = "cloud" }: { initial?: string }) {
  const [id, setId] = useState(initial);
  const r = resumes.find((x) => x.id === id) ?? resumes[0];

  const download = () => {
    const blob = new Blob([toText(r)], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `Nikhil_Santhosh_Jacob_${r.tab.replace(/[^a-z]+/gi, "_")}_Resume.txt`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="min-h-screen bg-slate-100 pb-16">
      <div className="no-print bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-emerald-400 uppercase">Resumes</p>
          <h1 className="font-display mt-2 text-3xl font-semibold sm:text-4xl">Four versions, one story</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-300">
            Each version leads with the same verified results, framed for a different role. Print to PDF for
            applications, or download plain text for online forms.
          </p>
        </div>
      </div>

      <div className="no-print sticky top-14 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-8">
          <div role="tablist" className="flex flex-wrap gap-2">
            {resumes.map((x) => (
              <button
                key={x.id}
                role="tab"
                aria-selected={x.id === id}
                onClick={() => setId(x.id)}
                className={cn(
                  "flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition",
                  x.id === id
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:border-slate-400",
                )}
              >
                <span className="text-xs opacity-60">#{x.number}</span>
                {x.tab}
                {x.isNew && (
                  <span className="rounded bg-emerald-400 px-1.5 py-0.5 text-[10px] font-bold text-slate-950">NEW</span>
                )}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={download}
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium hover:bg-slate-50"
            >
              Download .txt
            </button>
            <button
              onClick={() => window.print()}
              className="rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-500"
            >
              Print / Save PDF
            </button>
          </div>
        </div>
      </div>

      <div className="px-3 pt-8 sm:px-6">
        <Sheet r={r} />
      </div>
    </div>
  );
}
