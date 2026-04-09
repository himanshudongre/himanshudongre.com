import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero">
      <span className="eyebrow">404</span>
      <h1 className="page-title">That page does not exist.</h1>
      <p className="page-copy">
        The route may have changed, or the content may not be published yet.
      </p>
      <div className="resume-actions">
        <Link className="button" href="/">
          Back home
        </Link>
        <Link className="ghost-button" href="/work">
          View work
        </Link>
      </div>
    </section>
  );
}
