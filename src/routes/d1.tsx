import { createFileRoute, redirect } from "@tanstack/react-router";

// Rota antiga de downsell: mantida para compatibilidade, redireciona para /dw1.
export const Route = createFileRoute("/d1")({
  beforeLoad: () => { throw redirect({ to: "/dw1" }); },
  head: () => ({ meta: [{ title: "ArtKids — Oferta Exclusiva" }] }),
});
