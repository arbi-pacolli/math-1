import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

// Links in the navbar. "end" makes Home active only on the exact "/" route.
const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/lessons', label: 'Lessons' },
  { to: '/practice', label: 'Practice' },
  { to: '/calculator', label: 'Calculator' },
  { to: '/unit-circle', label: 'Unit Circle' },
  { to: '/equations', label: 'Equations' },
];

// Reads the saved theme, or falls back to the system setting
function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // localStorage can be blocked (for example in private mode); use the system setting
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Props: none
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = theme === 'dark';

  // Apply the theme to <html data-theme="..."> and save the choice
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // ignore: the theme still works for this visit
    }
  }, [theme]);

  // Escape closes the mobile menu
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__brand">
          MATH 1
        </NavLink>

        <button
          type="button"
          className="navbar__menu-button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav
          id="main-nav"
          aria-label="Main"
          className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}
        >
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="theme-toggle"
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
        >
          {isDark ? '☀' : '☾'}
        </button>
      </div>
    </header>
  );
}

export default Navbar;