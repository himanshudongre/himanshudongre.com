import { profile } from "@/content/profile";
import { SocialIconLinks } from "@/components/social-icon-links";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <p className="site-footer__note">
          {profile.epigraph} · {new Date().getFullYear()}
        </p>
        <SocialIconLinks className="site-footer__links" />
      </div>
    </footer>
  );
}
