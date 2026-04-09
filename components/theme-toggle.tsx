"use client";

import { useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document !== "undefined") {
      return document.documentElement.dataset.theme === "dark"
        ? "dark"
        : "light";
    }

    return "light";
  });

  function applyTheme(nextTheme: Theme) {
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  }

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    const withViewTransition = document as Document & {
      startViewTransition?: (callback: () => void) => void;
    };

    if (withViewTransition.startViewTransition) {
      withViewTransition.startViewTransition(() => applyTheme(nextTheme));
      return;
    }

    applyTheme(nextTheme);
  }

  const label = `Theme: ${theme}`;

  return (
    <button
      aria-label={label}
      className="theme-toggle"
      onClick={toggleTheme}
      type="button"
    >
      <span className="theme-toggle__glow" aria-hidden="true" />
      <span className="theme-toggle__label" suppressHydrationWarning>
        {label}
      </span>
    </button>
  );
}
