import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import Headline from "./Headline";

export interface Crumb {
  label: string;
  href?: string;
}

export interface HeaderFact {
  label: string;
  value: string;
}

interface PageHeaderProps {
  crumbs: Crumb[];
  kicker?: string;
  title: React.ReactNode;
  accent?: React.ReactNode;
  lede?: React.ReactNode;
  facts?: HeaderFact[];
  image?: { src: string; alt: string; position?: string };
  actions?: React.ReactNode;
  className?: string;
}

/**
 * Inner-page header. Breadcrumb answers "where am I", headline answers
 * "what is this", optional facts and a full-bleed photograph anchor the page.
 */
export default function PageHeader({
  crumbs,
  kicker,
  title,
  accent,
  lede,
  facts,
  image,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <header className={cn("pt-28 md:pt-36", className)}>
      <div className="wrap">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-mute">
            <li>
              <Link href="/" className="transition-colors hover:text-ink">
                Innaya
              </Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-2">
                <span aria-hidden="true" className="text-line-strong">
                  /
                </span>
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-ink">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-ink">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-12 grid gap-10 pb-16 md:mt-20 md:grid-cols-12 md:pb-24">
          <div className="md:col-span-8">
            {kicker && <p className="kicker mb-7 text-ink-soft">{kicker}</p>}
            <Headline as="h1" size="xl" accent={accent}>
              {title}
            </Headline>
          </div>
          {(lede || actions) && (
            <div className="flex flex-col gap-8 md:col-span-4 md:self-end">
              {lede && (
                <p className="max-w-[44ch] text-[16px] leading-[1.7] text-ink-soft">{lede}</p>
              )}
              {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
            </div>
          )}
        </div>
      </div>

      {facts && facts.length > 0 && (
        <div className="wrap">
          <dl className="grid grid-cols-2 border-t border-line md:grid-cols-4">
            {facts.map((f, i) => (
              <div
                key={f.label}
                className={cn(
                  "py-7 pr-4 md:py-9",
                  i % 2 === 1 && "pl-4 md:pl-0",
                  i >= 2 && "border-t border-line md:border-t-0",
                )}
              >
                <dd className="num text-[clamp(1.75rem,1.2rem+1.4vw,2.5rem)] font-normal leading-none tracking-[-0.035em] text-ink">
                  {f.value}
                </dd>
                <dt className="mt-3 text-[13px] leading-snug text-mute">{f.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      )}

      {image && (
        <div className="wrap mt-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[6px] bg-paper-deep md:aspect-[21/9]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(max-width: 1320px) 100vw, 1320px"
              className="object-cover"
              style={{ objectPosition: image.position ?? "center" }}
            />
          </div>
        </div>
      )}
    </header>
  );
}
