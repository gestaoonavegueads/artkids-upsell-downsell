import { createFileRoute } from "@tanstack/react-router";
import { OfferPage } from "@/components/offer/OfferPage";
import { offers } from "@/data/offers";

const o = offers.d1;
export const Route = createFileRoute("/dw1")({
  head: () => ({
    meta: [
      { title: `${o.title}: ArtKids` },
      { name: "description", content: o.sub },
      { property: "og:title", content: `${o.title}: ArtKids` },
      { property: "og:description", content: o.sub },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <OfferPage offer={o} />,
});
