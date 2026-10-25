import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';

export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (): void => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

/** Renders children only once the element is near the viewport (keeps WebGL off-screen canvases idle). */
export function useInView<T extends Element>(margin = '200px'): [React.RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return undefined;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: margin });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [margin]);
  return [ref, visible];
}

export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ title, lead }: { title: string; lead?: string }): JSX.Element {
  return (
    <Reveal>
      <header className="section-heading">
        <h2>{title}</h2>
        {lead && <p>{lead}</p>}
      </header>
    </Reveal>
  );
}

export function TiltCard({ children, className = '', hue }: { children: ReactNode; className?: string; hue?: number }): JSX.Element {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 });
  const glowX = useTransform(x, (v) => `${v * 100}%`);
  const glowY = useTransform(y, (v) => `${v * 100}%`);
  return (
    <motion.div
      className={`tilt-card ${className}`}
      style={{ rotateX, rotateY, '--glow-x': glowX, '--glow-y': glowY, '--hue': hue ?? 205 } as never}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left) / r.width);
        y.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => { x.set(0.5); y.set(0.5); }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollProgress(): JSX.Element {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

export function CursorGlow(): JSX.Element {
  const x = useSpring(-400, { stiffness: 150, damping: 25 });
  const y = useSpring(-400, { stiffness: 150, damping: 25 });
  useEffect(() => {
    const move = (e: PointerEvent): void => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, [x, y]);
  return <motion.div className="cursor-glow" style={{ x, y }} aria-hidden={true} />;
}

export function Tags({ items }: { items: string[] }): JSX.Element {
  return (
    <ul className="tags">
      {items.map((t) => <li key={t}>{t}</li>)}
    </ul>
  );
}
