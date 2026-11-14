# ArtKids — Esteira de Upsell & Downsell

Páginas de vendas dos 6 produtos da esteira ArtKids, versionadas do projeto Lovable
(TanStack Start + Tailwind v4, build para Cloudflare Workers).

## Rotas (publicadas em https://artkids.idealizandoinfo.site)

| Rota | Produto | Preço | Checkout (Cakto) |
|---|---|---|---|
| `/u1` | Kit Documentação e Anamnese Clínica Descomplicada | R$ 27,00 | pay.cakto.com.br/ztufvbj |
| `/dw1` | Pack de Anamnese Lúdica | R$ 19,97 | pay.cakto.com.br/sjt72ok |
| `/u2` | Pack Especialista TEA, TDAH e TOD | R$ 37,00 | pay.cakto.com.br/ntkxgzb |
| `/dw2` | SOS Crises: Guia de Intervenção Rápida | R$ 19,67 | pay.cakto.com.br/owsjz9x |
| `/u3` | Clube ArtKids (Assinatura VIP) | R$ 5 / 30 dias → R$ 29,90/mês | pay.cakto.com.br/378jrxa |
| `/dw3` | Passe Anual de Atualizações | R$ 77 único | pay.cakto.com.br/5vixp9b |

`/d1` `/d2` `/d3` são aliases antigos que redirecionam para `/dw1` `/dw2` `/dw3`.
A rota `/` continua servindo a oferta principal ArtKids (worker `artkidsterapia`).

Fluxo do funil: recusar U1 → DW1 → recusar → U2 → DW2 → U3 → DW3 → oferta principal.

## Estrutura

- `src/routes/` — uma rota por oferta (`u1.tsx`, `dw1.tsx`, ...)
- `src/data/offers.ts` — copy, preços, CTAs e links de recusa de cada oferta
- `src/data/bannerSlots.ts` + `src/assets/banners/` — banners de mockup (desktop 16:6 / mobile 4:5), imagens locais em `public/banners/`
- `src/components/offer/` — OfferPage, OfferBannerSlot, Mockups (fallback CSS)

## Deploy (Cloudflare Workers)

```bash
bun install
bun run build
cd .output/server && npx wrangler deploy   # worker: artkids-ofertas
```

Rotas da zona `idealizandoinfo.site` que apontam para o worker `artkids-ofertas`
(criadas via API; não sobrescrevem a oferta principal):
`artkids.idealizandoinfo.site/{u1,u2,u3,dw1,dw2,dw3,d1,d2,d3,banners}*`
