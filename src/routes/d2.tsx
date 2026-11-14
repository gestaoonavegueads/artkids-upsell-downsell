import { createFileRoute, redirect } from "@tanstack/react-router";

// Rota antiga de downsell: mantida para compatibilidade, redireciona para /dw2.
export const Route = createFileRoute("/d2")({
  beforeLoad: () => { throw redirect({ to: "/dw2" }); },
  head: () => ({ meta: [{ title: "ArtKids — Oferta Exclusiva" }] }),
});
