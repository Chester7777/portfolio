import { lazy, Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { caseStudies, contacts, freelance, jobs, profile, skillGroups, sphereWords, stats } from '../data/content';
import { Reveal, SectionHeading, Tags, TiltCard, useInView } from './ui';

const SkillsSphere = lazy(() => import('../three/SkillsSphere').then((m) => ({ default: m.SkillsSphere })));

export function About(): JSX.Element {
  return (
    <section id="about" className="section container">
      <SectionHeading title="About" />
      <div className="about">
        <Reveal>
          <TiltCard className="portrait" hue={230}>
            <img
              src={`${import.meta.env.BASE_URL}img/evgeny.jpg`}
              alt={profile.name}
              width={640}
              height={800}
              loading="lazy"
            />
            <span className="portrait__badge">
              <span className="pulse" /> {profile.location}
            </span>
          </TiltCard>
        </Reveal>
        <div className="about__body">
          <Reveal>
            <p className="about__text">
              I&apos;m a front-end developer who likes hard, data-heavy interfaces. From 2021 to 2026 I worked
              on one complex SaaS product for the construction industry — from canvas measurement tools and
              spreadsheet-grade tables to subscriptions and billing. Since 2023 I also build AI features end to
              end: the streaming chat UI and agent tools in the browser, and the Python LLM service behind them.
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
      </div>
    </section>
  );
}

export function Experience(): JSX.Element {
  return (
    <section id="experience" className="section container">
      <SectionHeading title="Experience" />
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
      <SectionHeading title="Skills" lead="Drag your cursor over the sphere." />
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
      <SectionHeading title="Freelance" lead="Websites I built for clients." />
      <div className="freelance">
        {freelance.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.12}>
            <article className="showcase">
              <a className="showcase__shot" href={p.live} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`}>
                <span className="showcase__bar" aria-hidden={true}><i /><i /><i /></span>
                <motion.img
                  src={`${import.meta.env.BASE_URL}${p.image}`}
                  alt={`${p.title} website`}
                  width={1200}
                  height={750}
                  loading="lazy"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
              </a>
              <div className="showcase__body">
                <span className="case__kicker">{p.client}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <Tags items={p.tags} />
                <div className="showcase__links">
                  <a className="btn btn--primary" href={p.live} target="_blank" rel="noreferrer">Live site ↗</a>
                  <a className="btn btn--ghost" href={p.code} target="_blank" rel="noreferrer">Code</a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Contact(): JSX.Element {
  return (
    <section id="contact" className="section container contact">
      <SectionHeading title="Let's talk" />
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
