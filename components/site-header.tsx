import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link href="/" className="brand">
          <span className="brand__mark">HD</span>
          <span className="brand__text">Himanshu Dongre</span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/work">Work</Link>
          <Link href="/updates">Updates</Link>
          <Link href="/resume">Resume</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
