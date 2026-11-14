import { Link } from "@tanstack/react-router";
import { OfferBannerSlot } from "./OfferBannerSlot";
import type { Offer } from "@/data/offers";

export function OfferPage({ offer }: { offer: Offer }) {
  return (
    <main className="min-h-screen bg-background px-4 py-8 md:py-14">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex justify-center">
          <span className="rounded-full bg-brand-sun px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-brand-ink">⚠️ Não feche esta página — oferta exclusiva</span>
        </div>
        <div className="mb-8 md:mb-10"><OfferBannerSlot id={offer.kind} alt={offer.title} /></div>
        <h1 className="text-center text-3xl font-extrabold leading-tight text-brand-ink md:text-5xl">{offer.headline}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg font-semibold text-muted-foreground md:text-xl">{offer.sub}</p>

        <p className="mt-8 text-lg leading-relaxed text-foreground md:mt-10">{offer.intro}</p>

        <ul className="mt-6 space-y-3">
          {offer.bullets.map((b) => (
            <li key={b} className="flex gap-3 rounded-2xl bg-card p-4 shadow-soft">
              <span className="text-xl leading-none">✅</span>
              <span className="font-semibold text-foreground">{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-3xl border-2 border-dashed border-brand-teal bg-muted p-6">
          <p className="font-display text-xl font-extrabold text-brand-ink">{offer.objection.q}</p>
          <p className="mt-2 leading-relaxed text-foreground">{offer.objection.a}</p>
        </div>

        <div className="mt-10 text-center">
          <p className="font-display text-2xl font-extrabold text-brand-ink">{offer.price}</p>
          <a href={offer.link} target="_blank" rel="noopener noreferrer"
            className="mt-4 inline-block w-full animate-pulse-soft rounded-2xl bg-cta px-6 py-5 font-display text-lg font-extrabold uppercase leading-tight text-cta-foreground shadow-cta transition-transform hover:translate-y-0.5 md:text-xl">
            {offer.cta}
          </a>
          <p className="mt-4 text-sm font-bold text-muted-foreground">🔒 {offer.seal}</p>
          <p className="mt-2 inline-block rounded-full bg-brand-mint px-3 py-1 text-xs font-bold text-brand-ink">🛡️ Garantia de 7 dias</p>
          <div className="mt-6">
            {offer.decline.to ? (
              <Link to={offer.decline.to} className="text-xs text-muted-foreground underline underline-offset-2 opacity-70 transition-opacity hover:opacity-100">
                {offer.decline.text}
              </Link>
            ) : (
              <a href={offer.decline.href} className="text-xs text-muted-foreground underline underline-offset-2 opacity-70 transition-opacity hover:opacity-100">
                {offer.decline.text}
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
