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

## ⚠️ Bugs CRÍTICOS de compat mobile (todos resolvidos — MUITO IMPORTANTE)

Ver seção completa no CLAUDE.md da `lp-acesso-imediato` — mesmos 6 fixes obrigatórios pra qualquer LP nova:

1. **Cores OKLCH → hex** (`@theme` override com `--color-*`)
2. **`-webkit-background-clip: text`** manual pro gradient text
3. **`--tw-gradient-position` sem `in oklab`** (sobrescreve todas as direções `bg-gradient-to-*`)
4. **Não usar `bg-color/opacity`** (Tailwind gera `color-mix(oklab)` que quebra) — usar `rgba()` inline
5. **`vite.config.js` com `build.target: es2019`** (evita JS moderno demais)
6. **Mobile URL bar** — `@media (hover: none) and (pointer: coarse) { footer { margin-bottom: 80px } }`

Ver `src/index.css` desta LP pra ver todos os fixes aplicados.

## Como trocar o link do CTA
1. GitHub: abre `src/blocks/CtaButton.jsx`, edita a linha `href`, commit
2. Vercel redeploya sozinha em ~30s

## Contexto salvo
Contexto completo do projeto: `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/DEV NINA/LP JC PRIME.md`
