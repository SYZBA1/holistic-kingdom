import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Impact", to: "/impact" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" }
];

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-kingdom-green/10 bg-white/75 backdrop-blur-lg dark:border-white/10 dark:bg-kingdom-dark/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src="/kingdom-logo.png" alt="Kingdom Resource logo" className="h-12 w-auto object-contain mix-blend-screen transition hover:scale-105" />
          <span className="hidden font-serif text-xl text-kingdom-green dark:text-kingdom-cream sm:block">Kingdom Resource</span>
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-1 rounded-full border border-kingdom-green/20 bg-white/70 px-2 py-1 dark:border-white/20 dark:bg-white/10">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-kingdom-green/10 text-kingdom-green dark:bg-white/15 dark:text-kingdom-yellow"
                      : "text-kingdom-ink/85 hover:bg-kingdom-green/10 dark:text-kingdom-cream/85 dark:hover:bg-white/10"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={onToggleTheme}
            className="rounded-full border border-kingdom-green/20 bg-white/70 p-2 text-kingdom-green dark:border-white/20 dark:bg-white/10 dark:text-kingdom-yellow"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link to="/donate" className="rounded-full bg-kingdom-dark px-5 py-2 text-sm font-semibold text-white dark:bg-kingdom-yellow dark:text-kingdom-dark">
            Donate Now
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-xl border border-kingdom-green/20 p-2 text-kingdom-green dark:border-white/20 dark:text-kingdom-cream md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="mx-4 mb-3 rounded-2xl border border-kingdom-green/15 bg-white/85 p-4 backdrop-blur-lg dark:border-white/15 dark:bg-kingdom-deep/90 md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-kingdom-ink dark:text-kingdom-cream"
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-2 flex items-center gap-2">
              <button
                onClick={onToggleTheme}
                className="rounded-lg border border-kingdom-green/20 px-3 py-2 text-sm text-kingdom-green dark:border-white/20 dark:text-kingdom-yellow"
              >
                {theme === "dark" ? "Light" : "Dark"}
              </button>
              <Link to="/donate" onClick={() => setOpen(false)} className="rounded-lg bg-kingdom-dark px-4 py-2 text-sm font-semibold text-white dark:bg-kingdom-yellow dark:text-kingdom-dark">
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
