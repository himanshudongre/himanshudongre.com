import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <p className="site-footer__note">
          {profile.epigraph} · {new Date().getFullYear()}
        </p>
        <div className="site-footer__links">
          {profile.socialLinks.map((link) => (
            <a
              key={link.label}
              className="hero__social-link"
              href={link.href}
              rel="noreferrer"
              target="_blank"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
