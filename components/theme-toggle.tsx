"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setTheme(getTheme());
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  function applyTheme(nextTheme: Theme) {
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  }

  function toggleTheme() {
    const currentTheme = getTheme();
    const nextTheme: Theme = currentTheme === "dark" ? "light" : "dark";
    const withViewTransition = document as Document & {
      startViewTransition?: (callback: () => void) => void;
    };

    if (withViewTransition.startViewTransition) {
      withViewTransition.startViewTransition(() => applyTheme(nextTheme));
      return;
    }

    applyTheme(nextTheme);
  }

  const nextTheme = theme === "dark" ? "light" : "dark";
  const label = `Switch to ${nextTheme} theme`;

  return (
    <button
      aria-label={label}
      className="theme-toggle"
      onClick={toggleTheme}
      type="button"
    >
      <span className="theme-toggle__glow" aria-hidden="true" />
      <span className="theme-toggle__icon" aria-hidden="true" suppressHydrationWarning>
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </span>
      <span className="sr-only">{label}</span>
    </button>
  );
}

function SunIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2.8v2.4M12 18.8v2.4M21.2 12h-2.4M5.2 12H2.8M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7M18.5 18.5l-1.7-1.7M7.2 7.2 5.5 5.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path
        d="M18.4 14.5a7.4 7.4 0 0 1-8.9-8.9A8.4 8.4 0 1 0 18.4 14.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}
