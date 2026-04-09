import { profile } from "@/content/profile";

type SocialIconLinksProps = {
  className?: string;
  itemClassName?: string;
};

export function SocialIconLinks({
  className = "",
  itemClassName = "social-icon-link",
}: SocialIconLinksProps) {
  return (
    <div className={className}>
      {profile.socialLinks.map((link) => (
        <a
          key={link.label}
          aria-label={link.label}
          className={itemClassName}
          href={link.href}
          rel="noreferrer"
          target="_blank"
          title={link.label}
        >
          <span aria-hidden="true">{iconFor(link.label)}</span>
          <span className="sr-only">{link.label}</span>
        </a>
      ))}
    </div>
  );
}

function iconFor(label: string) {
  switch (label) {
    case "GitHub":
      return <GitHubIcon />;
    case "LinkedIn":
      return <LinkedInIcon />;
    case "X":
      return <XIcon />;
    case "Instagram":
      return <InstagramIcon />;
    default:
      return null;
  }
}

function GitHubIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.7-2.7-.3-5.6-1.3-5.6-6A4.7 4.7 0 0 1 6.4 8c-.1-.3-.5-1.6.1-3.4 0 0 1-.3 3.5 1.3a12 12 0 0 1 6.3 0c2.4-1.6 3.5-1.3 3.5-1.3.7 1.8.3 3.1.1 3.4a4.7 4.7 0 0 1 1.3 3.3c0 4.7-2.9 5.7-5.7 6 .4.4.9 1.1.9 2.2v3.2c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46a2.48 2.48 0 0 0-.02-4.96ZM2.8 9.6h4.36V21H2.8V9.6Zm7.1 0h4.18v1.55h.06c.58-1.1 2-2.27 4.12-2.27 4.4 0 5.22 2.9 5.22 6.66V21h-4.36v-4.87c0-1.16-.02-2.65-1.61-2.65-1.62 0-1.87 1.27-1.87 2.57V21H9.9V9.6Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.9 2H22l-6.76 7.72L23.2 22h-6.24l-4.89-7.38L5.6 22H2.5l7.23-8.27L1.6 2h6.4l4.42 6.77L18.9 2Zm-1.1 18h1.73L7.06 3.9H5.2L17.8 20Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <rect
        x="3.2"
        y="3.2"
        width="17.6"
        height="17.6"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.9" r="1.2" fill="currentColor" />
    </svg>
  );
}
