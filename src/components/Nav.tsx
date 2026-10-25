import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export function Nav(): JSX.Element {
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <motion.nav
      className={`nav ${open ? 'nav--open' : ''}`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <a className="nav__logo" href="#top" onClick={() => setOpen(false)}>
        EC<span>.</span>
      </a>
      <button
        type="button"
        className="nav__burger"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>
      <ul className="nav__links">
        {LINKS.map(({ id, label }) => (
          <li key={id}>
            <a href={`#${id}`} className={active === id ? 'is-active' : ''} onClick={() => setOpen(false)}>
              {label}
              {active === id && <motion.span layoutId="nav-dot" className="nav__dot" />}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
