import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/content';

const HeroScene = lazy(() => import('../three/HeroScene').then((m) => ({ default: m.HeroScene })));

const ROLES = ['React', 'TypeScript', 'Redux-Saga', 'AI agents', 'Three.js'];

export function Hero({ reduced }: { reduced: boolean }): JSX.Element {
  return (
    <section id="top" className="hero">
      <div className="hero__scene" aria-hidden={true}>
        <Suspense fallback={null}>
          <HeroScene reduced={reduced} />
        </Suspense>
      </div>
      <div className="container hero__content">
        <motion.p
          className="hero__hello"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="pulse" /> Open to new opportunities · {profile.location}
        </motion.p>
        <h1 className="hero__title" aria-label={profile.name}>
          {profile.name.split(' ').map((word, i) => (
            <motion.span
              aria-hidden={true}
              key={word}
              initial={{ opacity: 0, y: 60, rotateX: -60 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.9, delay: 0.4 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}{' '}
            </motion.span>
          ))}
        </h1>
        <motion.p
          className="hero__role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <span className="gradient-text">{profile.role}</span>
        </motion.p>
        <motion.ul
          className="hero__marquee"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 1.1 } } }}
        >
          {ROLES.map((r) => (
            <motion.li key={r} variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
              {r}
            </motion.li>
          ))}
        </motion.ul>
        <motion.p
          className="hero__intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          {profile.intro}
        </motion.p>
        <motion.div
          className="hero__cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <a className="btn btn--primary" href="#work">See my work</a>
          <a className="btn btn--ghost" href="#contact">Get in touch</a>
        </motion.div>
      </div>
      <a className="hero__scroll" href="#about" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}
