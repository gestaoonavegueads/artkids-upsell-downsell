#!/usr/bin/env bash
# Build + deploy no worker artkids-ofertas (Cloudflare).
# IMPORTANTE: os assets das ofertas ficam em /banners/_a/ (relocados após o build)
# para NÃO colidir com /assets/* da oferta principal (servida pelo worker artkidsterapia / origem).
# NUNCA criar rota /assets*, /favicon.ico ou /robots.txt apontando para este worker.
set -euo pipefail
cd "$(dirname "$0")/.."
bun install
bun run build
cd .output
mkdir -p public/banners/_a
cp -r public/assets/* public/banners/_a/
grep -rl '/assets/' server public/banners/_a | while read -r f; do
  sed -i 's|/assets/|/banners/_a/|g' "$f"
done
sed -i 's|/assets/|/banners/_a/|g' public/_headers public/robots.txt 2>/dev/null || true
rm -rf public/assets
cd server
npx wrangler deploy --name artkids-ofertas --config wrangler.json
