import { lazy, Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { caseStudies, contacts, jobs, petProjects, profile, skillGroups, sphereWords, stats } from '../data/content';
import { Reveal, SectionHeading, Tags, TiltCard, useInView } from './ui';

const SkillsSphere = lazy(() => import('../three/SkillsSphere').then((m) => ({ default: m.SkillsSphere })));

export function About(): JSX.Element {
  return (
    <section id="about" className="section container">
      <SectionHeading index="01" title="About" />
      <div className="about">
        <Reveal>
          <p className="about__text">
            I&apos;m a front-end developer who likes hard, data-heavy interfaces. From 2021 to 2026 I worked
            on one complex SaaS product for the construction industry — from canvas measurement tools and
            spreadsheet-grade tables to subscriptions and billing. Since 2023 I also build AI features end to end:
            the streaming chat UI and agent tools in the browser, and the Python LLM service behind them.
          </p>
        </Reveal>
        <div className="stats">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="stat">
                <strong className="gradient-text">{s.value}</strong>
                <span>{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience(): JSX.Element {
  return (
    <section id="experience" className="section container">
      <SectionHeading index="02" title="Experience" />
      <ol className="timeline">
        {jobs.map((job, i) => (
          <li key={job.company} className="timeline__item">
            <Reveal delay={i * 0.1}>
              <div className="timeline__card">
                <div className="timeline__head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="timeline__company">{job.company}</p>
                  </div>
                  <span className="timeline__period">{job.period}</span>
                </div>
                <p className="muted">{job.summary}</p>
                <ul className="bullets">
                  {job.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
                <Tags items={job.stack} />
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Work(): JSX.Element {
  return (
    <section id="work" className="section container">
      <SectionHeading
        index="03"
        title="Selected work"
        lead="Highlights from commercial projects. The product code is private, so here is what I built and how."
      />
      <div className="cases">
        {caseStudies.map((c, i) => (
          <Reveal key={c.title} delay={(i % 2) * 0.12}>
            <TiltCard className="case" hue={c.hue}>
              <span className="case__kicker">{c.kicker}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <Tags items={c.tags} />
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Skills({ reduced }: { reduced: boolean }): JSX.Element {
  const [ref, visible] = useInView<HTMLDivElement>();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { if (visible) setMounted(true); }, [visible]);
  return (
    <section id="skills" className="section container">
      <SectionHeading index="04" title="Skills" lead="Drag your cursor over the sphere." />
      <div className="skills">
        <div className="skills__sphere" ref={ref} aria-hidden={true}>
          {mounted && (
            <Suspense fallback={null}>
              <SkillsSphere words={sphereWords} reduced={reduced} active={visible} />
            </Suspense>
          )}
        </div>
        <div className="skills__groups">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <div className="skill-group">
                <h3>{g.title}</h3>
                <Tags items={g.items} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects(): JSX.Element {
  return (
    <section id="projects" className="section container">
      <SectionHeading index="05" title="Early projects" lead="Learning projects from 2020–2021 — where it started." />
      <div className="projects">
        {petProjects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.08}>
            <motion.a
              className="project"
              href={p.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="project__head">
                <h3>{p.title}</h3>
                <span className="project__arrow" aria-hidden={true}>↗</span>
              </div>
              <p>{p.text}</p>
              <Tags items={p.tags} />
            </motion.a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Contact(): JSX.Element {
  return (
    <section id="contact" className="section container contact">
      <SectionHeading index="06" title="Let's talk" />
      <Reveal>
        <p className="contact__lead">
          Looking for a front-end developer who is not afraid of complex UI or AI features?
          <br />
          The fastest way to reach me is Telegram.
        </p>
      </Reveal>
      <div className="contact__links">
        {contacts.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.08}>
            <a className="contact__link" href={c.href} target="_blank" rel="noreferrer">
              <span className="contact__label">{c.label}</span>
              <span className="contact__value">{c.value}</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Footer(): JSX.Element {
  return (
    <footer className="footer container">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span className="muted">Built with React, TypeScript, Three.js and Framer Motion</span>
    </footer>
  );
}
