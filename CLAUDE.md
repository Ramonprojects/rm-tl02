# LP JC PRIME — Acesso Liberado

Landing page para tipster/apostas esportivas, parte do conjunto **LP JC PRIME**.

## Stack
- Vite + React 19 + Tailwind v4
- Deploy: GitHub → Vercel (auto-deploy no push pra `main`)

## Estrutura
- `src/App.jsx` — layout com fundo estádio full-bleed + conteúdo centralizado
- `src/blocks/Hero.jsx` — estádio de fundo (blur, brightness 0.85, vignette suave)
- `src/blocks/Headline.jsx` — título "ACESSO LIBERADO" + subtítulo
- `src/blocks/CtaButton.jsx` — botão azul Telegram (#2AABEE) com aviãozinho estilo app icon
- `src/blocks/Disclaimer.jsx` — rodapé com selo BATEUBET (10vh)
- `src/index.css` — Tailwind + keyframes (breathe-cta, shine-sweep, arrow-nudge, text-shine)

## Layout específico
- Main: `h-[100dvh]` — sempre 1 tela cheia sem scroll (mobile e desktop)
- Fundo do estádio: `absolute inset-0`, blur-[6px], brightness-[0.85]
- Botão: fundo `#2AABEE`, aviãozinho branco em bolinha azul dentro de quadradinho branco

## Convenções
- Padding vertical no mobile: `py-6` (compacto pra tudo caber em 1 tela)
- Disclaimer é `h-[10vh]` com `object-contain` centralizado
- Link do CTA fica em `CtaButton.jsx` → `CONTENT.href`

## LPs irmãs (JC Prime set)
| LP | Repo | Diferenças |
|---|---|---|
| Acesso Imediato | `lp-acesso-imediato` | foto Jota, verde, layout 2-col desktop |
| Acesso Liberado (esta) | `lp-acesso-liberado` | fundo estádio, azul Telegram, aviãozinho |
| Comunidade | `lp-comunidade` | igual esta, subtítulo diferente |
| Comunidade Verde | `lp-comunidade-verde` | estádio + botão verde, sem aviãozinho, selo Esportiva |

## ⚠️ Bug Tailwind v4 + Android antigo (resolvido — MUITO IMPORTANTE)
Tailwind v4 gera cores em `oklch()` (Chrome 111+). Em Android antigo (Chrome <111, Samsung Internet antigo), OKLCH não é suportado → todas as cores lime/sky/green/etc caem pra `unset` e a LP quebra visualmente (botão sem cor, gradiente vaza, texto branco em fundo verde).

**Fix**: no `src/index.css`, dentro do bloco `@theme`, sobrescrevemos `--color-*` das cores usadas com hex tradicional. Se adicionar cor Tailwind nova (ex: `text-orange-500`), tem que adicionar `--color-orange-500: #f97316` no `@theme`.

Também tem fix de `-webkit-background-clip: text` no fim do `index.css` (Tailwind v4 não adiciona prefixo webkit automaticamente).

## Como trocar o link do CTA
1. GitHub: abre `src/blocks/CtaButton.jsx`, edita a linha `href`, commit
2. Vercel redeploya sozinha em ~30s

## Contexto salvo
Contexto completo do projeto: `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/DEV NINA/LP JC PRIME.md`
