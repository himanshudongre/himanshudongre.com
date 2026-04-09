import Link from "next/link";

import type { UpdateEntry } from "@/content/updates";
import { formatMonthYear } from "@/lib/utils";

type UpdateCardProps = {
  update: UpdateEntry;
};

export function UpdateCard({ update }: UpdateCardProps) {
  return (
    <article className="timeline__item">
      <div className="timeline__meta">
        <span>{formatMonthYear(update.date)}</span>
        <span>{update.kind}</span>
      </div>
      <h3 className="timeline__title">{update.title}</h3>
      <p className="timeline__summary">{update.summary}</p>
      {update.links.length ? (
        <div className="update-links">
          {update.links.map((link) =>
            link.href.startsWith("/") ? (
              <Link key={link.href} className="text-link" href={link.href}>
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                className="text-link"
                href={link.href}
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            )
          )}
        </div>
      ) : null}
    </article>
  );
}
