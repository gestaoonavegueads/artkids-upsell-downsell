import { createFileRoute, redirect } from "@tanstack/react-router";

// Rota antiga de downsell: mantida para compatibilidade, redireciona para /dw3.
export const Route = createFileRoute("/d3")({
  beforeLoad: () => { throw redirect({ to: "/dw3" }); },
  head: () => ({ meta: [{ title: "ArtKids: Oferta Exclusiva" }] }),
});
