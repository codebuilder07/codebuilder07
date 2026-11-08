import { useState } from "react";
import { cn } from "../utils/cn";
import { CountUp, Pill, Reveal, Section } from "./ui";
import { AgentDemo, FinOpsDemo, LatencyDemo } from "./Demos";
import {
  achievements,
  aiEfficiency,
  aiExperience,
  awards,
  collaboration,
  communication,
  executive,
  heroStats,
  impactTimeline,
  languages,
  nicheSkills,
  otherExperience,
  profile,
  projects,
  quotes,
  recognition,
  roles,
  valueToTeam,
  writing,
  type Achievement,
} from "../data/content";

const tagStyle: Record<Achievement["tag"], string> = {
  Cost: "bg-amber-100 text-amber-800",
  Speed: "bg-sky-100 text-sky-800",
  Reliability: "bg-emerald-100 text-emerald-800",
  AI: "bg-violet-100 text-violet-800",
  Scale: "bg-rose-100 text-rose-800",
};

/* ─────────────────────────── HERO ─────────────────────────── */
function Hero({ onResume }: { onResume: () => void }) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-sky-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-24">
        <div className="flex flex-wrap gap-2" style={{ animation: "fade-up .6s ease both" }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Open to relocation · Available for senior and advisory roles
          </span>
        </div>

        <h1
          className="font-display mt-6 max-w-4xl text-4xl leading-[1.08] font-semibold sm:text-6xl"
          style={{ animation: "fade-up .7s .08s ease both" }}
        >
          I build data and AI platforms that <span className="text-emerald-400">save money</span>,{" "}
          <span className="text-emerald-400">move faster</span> and that people actually use.
        </h1>

        <p
          className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300"
          style={{ animation: "fade-up .7s .16s ease both" }}
        >
          I'm <strong className="text-white">{profile.name}</strong>. I've spent 3+ years running production platforms at
          JP Morgan Chase and Transocean, and launched an AI assistant now used by 4,100+ people. Tech Mahindra
          Innovator of the Month, Jan 2026.
        </p>

        <div className="mt-8 flex flex-wrap gap-3" style={{ animation: "fade-up .7s .24s ease both" }}>
          <a
            href="#achievements"
            className="rounded-lg bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
          >
            See the results
          </a>
          <button
            onClick={onResume}
            className="rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            View resumes: Cloud · ML · Data · Executive
          </button>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg px-5 py-3 text-sm font-semibold text-slate-300 transition hover:text-white"
          >
            Get in touch →
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-2" style={{ animation: "fade-up .7s .3s ease both" }}>
          {profile.roles.map((r) => (
            <span key={r} className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
              {r}
            </span>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 lg:grid-cols-4">
          {heroStats.map((s) => (
            <div key={s.label} className="bg-slate-950/80 p-5 sm:p-6">
              <div className="font-display text-3xl font-semibold text-white sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm font-medium text-slate-200">{s.label}</div>
              <div className="mt-0.5 text-xs text-slate-400">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── ACHIEVEMENTS ─────────────────────────── */
function Achievements() {
  const tags = ["All", "Cost", "Speed", "Reliability", "AI", "Scale"] as const;
  const [tag, setTag] = useState<(typeof tags)[number]>("All");
  const list = achievements.filter((a) => tag === "All" || a.tag === tag);

  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="What I've delivered, in terms of results"
      intro="Every number below comes from real production work. Filter by the kind of impact you care about."
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setTag(t)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition",
              tag === t
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-300 bg-white text-slate-600 hover:border-slate-400",
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {list.map((a) => (
          <article
            key={a.title}
            className="group flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="w-28 shrink-0 sm:w-32">
              <div className="font-display text-3xl leading-none font-semibold text-emerald-700 sm:text-4xl">
                {a.metric}
              </div>
              <span className={cn("mt-3 inline-block rounded-full px-2 py-0.5 text-[11px] font-semibold", tagStyle[a.tag])}>
                {a.tag}
              </span>
            </div>
            <div>
              <h3 className="font-semibold leading-snug text-slate-900">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{a.story}</p>
              <p className="mt-3 text-xs font-medium text-slate-400">{a.who}</p>
            </div>
          </article>
        ))}
      </div>

      <h3 className="font-display mt-16 text-2xl font-semibold">Awards and recognition</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {awards.map((a, i) => (
          <Reveal key={a.title} delay={i * 60}>
            <div className="h-full rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-5">
              <div className="flex items-center justify-between">
                <span className="text-2xl">🏆</span>
                <span className="text-xs font-semibold text-amber-700">{a.date}</span>
              </div>
              <h4 className="mt-2 font-semibold leading-snug">{a.title}</h4>
              <p className="text-xs font-medium text-slate-500">{a.org}</p>
              <p className="mt-2 text-sm text-slate-600">{a.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────────────── EXPERIENCE ─────────────────────────── */
function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Four roles, one pattern: take on messy problems and leave things better"
      intro="Told as outcomes. The technical detail is in the resumes."
      className="bg-white"
    >
      <div className="relative space-y-8 border-l-2 border-slate-200 pl-6 sm:pl-10">
        {roles.map((r) => (
          <Reveal key={r.role + r.org}>
            <div className="relative">
              <span className="absolute top-2 -left-[33px] h-4 w-4 rounded-full border-4 border-white bg-emerald-500 ring-2 ring-emerald-200 sm:-left-[49px]" />
              <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">{r.role}</h3>
                    <p className="text-sm text-slate-600">
                      {r.org}
                      {r.client && <span className="text-slate-400"> → </span>}
                      {r.client && <span className="font-medium text-emerald-700">{r.client}</span>}
                    </p>
                  </div>
                  <div className="text-right text-xs text-slate-500">
                    <div className="font-semibold text-slate-700">{r.period}</div>
                    <div>{r.place}</div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-slate-600 italic">{r.mission}</p>
                <ul className="mt-4 space-y-2">
                  {r.wins.map((w) => (
                    <li key={w} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────────────── PROJECTS ─────────────────────────── */
function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Real projects, and a few you can try"
      intro="Three interactive pieces based on actual outcomes, followed by the full projects behind them."
    >
      <div className="grid items-stretch gap-5 lg:grid-cols-3">
        <Reveal className="h-full">
          <FinOpsDemo />
        </Reveal>
        <Reveal delay={80} className="h-full">
          <LatencyDemo />
        </Reveal>
        <Reveal delay={160} className="h-full">
          <AgentDemo />
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 70}>
            <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-emerald-300 hover:shadow-md">
              <div className="text-3xl">{p.emoji}</div>
              <h3 className="mt-3 text-lg leading-snug font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{p.tagline}</p>
              <p className="mt-3 rounded-lg bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-800">
                {p.outcome}
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
                {p.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="text-emerald-600">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                {p.stack.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-sm text-slate-500">
        More code and experiments on{" "}
        <a className="font-medium text-emerald-700 underline" href={profile.github} target="_blank" rel="noreferrer">
          {profile.githubLabel}
        </a>
        .
      </p>
    </Section>
  );
}

/* ─────────────────────────── AI ─────────────────────────── */
function AI() {
  return (
    <Section
      id="ai"
      dark
      eyebrow="AI experience"
      title="AI that's measured by the work it removes"
      intro="I focus on AI that people open every day: agents tied to real systems, simple voice and photo input, and clear before-and-after numbers."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {aiExperience.map((a, i) => (
          <Reveal key={a.title} delay={(i % 3) * 70}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold text-white">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{a.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <h3 className="font-display mt-16 text-2xl font-semibold text-white">How AI brought efficiency</h3>
      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {aiEfficiency.map((m) => (
          <div key={m.label} className="rounded-2xl bg-gradient-to-b from-emerald-400/15 to-transparent p-5 ring-1 ring-emerald-400/20">
            <div className="font-display text-4xl font-semibold text-emerald-300">
              <CountUp value={m.value} suffix={m.suffix} />
            </div>
            <div className="mt-2 text-sm font-medium text-white">{m.label}</div>
            <div className="mt-1 text-xs text-slate-400">{m.note}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────────────── VALUE ─────────────────────────── */
function Value() {
  return (
    <Section
      id="value"
      eyebrow="Why me"
      title="Why I'm valuable to your team"
      intro="Beyond tools and titles, this is how I work."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {valueToTeam.map((v, i) => (
          <Reveal key={v.title} delay={(i % 3) * 70}>
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-6">
              <div className="font-display text-3xl font-semibold text-emerald-600/40">0{i + 1}</div>
              <h3 className="mt-2 font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <h3 className="font-display mt-16 text-2xl font-semibold">Niche skills I bring</h3>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {nicheSkills.map((n) => (
          <div key={n.title} className="rounded-2xl bg-slate-900 p-5 text-white">
            <h4 className="font-semibold text-emerald-300">{n.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{n.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────────────── PEOPLE ─────────────────────────── */
function People() {
  return (
    <Section
      id="people"
      eyebrow="Communication & collaboration"
      title="Good platforms are built by aligned people"
      intro="Much of my impact came from getting clients, security, database and operations teams moving in the same direction."
      className="bg-white"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="mb-4 font-semibold text-slate-900">Communication</h3>
          <div className="space-y-3">
            {communication.map((c) => (
              <Reveal key={c.title}>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm font-semibold">{c.title}</div>
                  <p className="mt-1 text-sm text-slate-600">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-semibold text-slate-900">Collaboration</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {collaboration.map((c) => (
              <Reveal key={c.team}>
                <div className="h-full rounded-xl border border-emerald-100 bg-emerald-50/50 p-4">
                  <div className="text-sm font-semibold text-emerald-900">{c.team}</div>
                  <p className="mt-1 text-sm text-slate-600">{c.what}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─────────────────────────── EXECUTIVE + WRITING ─────────────────────────── */
function Executive() {
  return (
    <Section
      id="ideas"
      dark
      eyebrow="Beyond the code"
      title="From building pipelines to shaping ideas"
      intro={executive.intro}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {executive.shift.map((s) => (
          <div key={s.from} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm">
            <span className="flex-1 text-slate-400 line-through decoration-slate-600">{s.from}</span>
            <span className="text-emerald-400">→</span>
            <span className="flex-1 font-medium text-white">{s.to}</span>
          </div>
        ))}
      </div>

      <h3 className="font-display mt-14 text-2xl font-semibold text-white">How I can be involved in an executive group</h3>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {executive.offers.map((o) => (
          <Reveal key={o.title}>
            <div className="h-full rounded-2xl bg-white p-6 text-slate-900">
              <h4 className="font-semibold">{o.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{o.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <h3 className="font-display mt-14 text-2xl font-semibold text-white">Writing and sharing ideas</h3>
      <p className="mt-2 max-w-2xl text-sm text-slate-400">
        Topics I'm developing as articles and talks, so ideas travel further than the projects themselves.
      </p>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {writing.map((w) => (
          <div key={w.title} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="shrink-0 rounded-md bg-emerald-400/15 px-2 py-1 text-[11px] font-semibold text-emerald-300">
              {w.kind}
            </div>
            <div>
              <div className="text-sm font-medium text-white">{w.title}</div>
              <div className="mt-0.5 text-xs text-slate-400">{w.topic} · Coming soon</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────────────── LANGUAGES + OTHER ─────────────────────────── */
function Languages() {
  return (
    <Section
      id="languages"
      eyebrow="Languages & background"
      title="Languages I work in, and where else I've learned"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="font-semibold">Programming languages</h3>
          <div className="mt-5 space-y-4">
            {languages.programming.map((l) => (
              <div key={l.name}>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{l.name}</span>
                  <span className="text-slate-500">{l.detail}</span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-emerald-500" style={{ width: `${l.level}%` }} />
                </div>
              </div>
            ))}
          </div>

          <h3 className="mt-8 font-semibold">Spoken languages</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {languages.spoken.map((l) => (
              <li key={l.name} className="flex justify-between border-b border-slate-100 pb-2">
                <span className="font-medium">{l.name}</span>
                <span className="text-slate-500">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="font-semibold">Other relevant experience</h3>
          <div className="mt-5 space-y-5">
            {otherExperience.map((o) => (
              <div key={o.title} className="border-l-2 border-emerald-300 pl-4">
                <div className="text-sm font-semibold">{o.title}</div>
                <div className="text-xs text-slate-500">{o.where}</div>
                <p className="mt-1 text-sm text-slate-600">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
        <h3 className="font-semibold">Journey</h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-5">
          {impactTimeline.map((t) => (
            <div key={t.year} className="relative">
              <div className="font-display text-xl font-semibold text-emerald-700">{t.year}</div>
              <p className="mt-1 text-sm text-slate-600">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─────────────────────────── RECOMMENDATIONS ─────────────────────────── */
function Recommendations() {
  return (
    <Section
      id="recommendations"
      eyebrow="Recommendations"
      title="What the work has earned"
      intro="Recognition from clients and colleagues, based on documented outcomes."
      className="bg-white"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {recognition.map((r) => (
          <Reveal key={r.text}>
            <blockquote className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="font-display text-4xl leading-none text-emerald-500">“</div>
              <p className="-mt-1 text-base leading-relaxed text-slate-800">{r.text}</p>
              <footer className="mt-4 text-sm font-semibold text-slate-500">{r.from}</footer>
            </blockquote>
          </Reveal>
        ))}
        {quotes.map((q) => (
          <blockquote key={q.name} className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-slate-800">“{q.text}”</p>
            <footer className="mt-3 text-sm font-semibold text-slate-500">
              {q.name}, {q.role}
            </footer>
          </blockquote>
        ))}
      </div>
      <p className="mt-6 text-sm text-slate-500">
        Personal recommendations are available on{" "}
        <a className="font-medium text-emerald-700 underline" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>{" "}
        and on request.
      </p>
    </Section>
  );
}

/* ─────────────────────────── CONTACT ─────────────────────────── */
function Contact({ onResume }: { onResume: () => void }) {
  return (
    <section id="contact" className="scroll-mt-16 bg-slate-950 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <h2 className="font-display text-3xl font-semibold sm:text-5xl">Let's build something that matters.</h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          Hiring for cloud, ML or data platform roles? Starting something and need a thinking partner? I'd like to talk.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-300"
          >
            {profile.email}
          </a>
          <button
            onClick={onResume}
            className="rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold hover:bg-white/10"
          >
            Download a resume
          </button>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
          <a className="hover:text-white" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
            {profile.phone}
          </a>
          <a className="hover:text-white" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="hover:text-white" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="hover:text-white" href={profile.credly} target="_blank" rel="noreferrer">
            Credly
          </a>
          <span>{profile.location}</span>
        </div>
      </div>
    </section>
  );
}

export default function Portfolio({ onResume }: { onResume: () => void }) {
  return (
    <>
      <Hero onResume={onResume} />
      <Achievements />
      <Experience />
      <Projects />
      <AI />
      <Value />
      <People />
      <Executive />
      <Languages />
      <Recommendations />
      <Contact onResume={onResume} />
    </>
  );
}
