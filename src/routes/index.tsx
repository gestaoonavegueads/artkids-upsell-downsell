import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => { throw redirect({ to: "/u1" }); },
  head: () => ({ meta: [{ title: "ArtKids — Oferta Exclusiva" }, { name: "description", content: "Oferta exclusiva para clientes ArtKids." }, { property: "og:title", content: "ArtKids — Oferta Exclusiva" }, { property: "og:description", content: "Oferta exclusiva para clientes ArtKids." }] }),
});
