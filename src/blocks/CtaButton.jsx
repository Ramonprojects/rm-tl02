// ============================================================================
// EDITE OS TEXTOS E LINK AQUI
// ============================================================================
const CONTENT = {
  label: 'Quero meu acesso',
  href: 'https://track.grupojc.cc/track/b215d5e4-a406-450d-bc5f-f9687470105e/redirect', // TROQUE pelo link do grupo (WhatsApp/Telegram)
  // Botão secundário — fallback pra quem não tem Telegram (vai pro WhatsApp)
  secondary: {
    label: 'Clique aqui se você não tiver Telegram',
    href: 'https://bb.telegramdirect.cc/',
  },
}
export default function CtaButton() {
  // Handler do botão principal (preserva o padrão original — window.open)
  const handleClick = (e) => {
    e.preventDefault()
    try {
      const params = new URLSearchParams(window.location.search);
      const utmKeys = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','campaign','fbclid','gclid','cid','account_id'];
      const url = new URL(CONTENT.href);
      utmKeys.forEach(k => {
        const v = params.get(k);
        if (v) url.searchParams.set(k, v);
      });
      if (typeof window.dispararLead === 'function') window.dispararLead()
      window.open(url.toString(), '_blank', 'noopener,noreferrer')
    } catch {
      if (typeof window.dispararLead === 'function') window.dispararLead()
      window.open(CONTENT.href, '_blank', 'noopener,noreferrer')
    }
  }

  // Handler do botão secundário (padrão moderno — <a> nativo, funciona com ad blocker)
  const handleSecondaryClick = (e) => {
    try {
      const params = new URLSearchParams(window.location.search);
      const utmKeys = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','campaign','fbclid','gclid','cid','account_id'];
      if (e && e.currentTarget && e.currentTarget.href) {
        const url = new URL(e.currentTarget.href);
        utmKeys.forEach(k => {
          const v = params.get(k);
          if (v) url.searchParams.set(k, v);
        });
        e.currentTarget.href = url.toString();
      }
    } catch { /* ignore */ }
    if (typeof window !== 'undefined' && typeof window.dispararLead === 'function') {
      try { window.dispararLead() } catch { /* ignore */ }
    }
  }

  return (
    <section className="px-6 w-full max-w-md">
      <a
        href={CONTENT.href}
        data-href={CONTENT.href}
        data-trackpanel
        target="_self"
        rel="noopener noreferrer"
        aria-label={CONTENT.label}
        className="group relative block w-full h-14 min-[400px]:h-16 min-[430px]:h-20 rounded-full overflow-hidden cursor-pointer active:scale-95 transition-transform animate-[breathe-cta_2.4s_ease-in-out_infinite]"
        style={{ backgroundColor: '#2AABEE' }}
        onClick={handleClick}
      >
        {/* Faixa branca brilhante deslizando por cima (shine sweep) */}
        <span className="pointer-events-none absolute inset-0 overflow-hidden">
          <span
            className="absolute top-0 -left-1/3 h-full w-1/3 skew-x-12 animate-[shine-sweep_3s_ease-in-out_infinite]"
            style={{ backgroundImage: 'linear-gradient(to right, transparent, rgba(255,255,255,0.7), transparent)' }}
          />
        </span>

        {/* Highlight glossy no topo */}
        <span
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2"
          style={{ backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)' }}
        />

        {/* Conteúdo */}
        <span className="relative z-10 flex items-center justify-center gap-3 h-full px-6">
          {/* Ícone do Telegram estilo app icon (quadradinho branco + bolinha azul + avião) */}
          <span className="shrink-0 w-10 h-10 lg:w-11 lg:h-11 rounded-[10px] bg-white flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
            <span
              className="w-8 h-8 lg:w-9 lg:h-9 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(180deg, #37BBFE 0%, #1E96C8 100%)',
              }}
            >
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 text-white translate-x-[-1px]"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
              </svg>
            </span>
          </span>

          <span
            className="text-black text-base lg:text-xl tracking-wider uppercase whitespace-nowrap"
            style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 900 }}
          >
            {CONTENT.label}
          </span>

          <svg
            className="w-5 h-5 lg:w-6 lg:h-6 text-black animate-[arrow-nudge_1.1s_ease-in-out_infinite]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </span>
      </a>

      {/* Botão secundário — pill azul escuro minimalista + ícone WhatsApp */}
      <a
        href={CONTENT.secondary.href}
        data-href={CONTENT.secondary.href}
        target="_self"
        rel="noopener noreferrer"
        aria-label={CONTENT.secondary.label}
        onClick={handleSecondaryClick}
        className="group relative mx-auto mt-8 w-fit flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-white text-[10px] lg:text-[11px] font-bold uppercase tracking-wide active:scale-95 transition-all shadow-[0_1px_6px_rgba(0,0,0,0.3)] hover:shadow-[0_1px_10px_rgba(0,0,0,0.5)]"
        style={{ backgroundColor: '#0A2540' }}
      >
        {/* Ícone oficial do app WhatsApp (verde + fone branco) */}
        <svg
          className="shrink-0 w-4 h-4 lg:w-5 lg:h-5 rounded-[5px]"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect width="512" height="512" rx="110" fill="#25D366" />
          <path
            fill="#FFFFFF"
            d="M256 96c-88.2 0-160 71.8-160 160 0 28.3 7.4 55.9 21.4 80.2L96 416l82.5-21.6c23.4 12.8 49.9 19.6 77.5 19.6 88.2 0 160-71.8 160-160S344.2 96 256 96zm0 293.4c-24.8 0-49.1-6.7-70.4-19.4l-5-3-49 12.8 13.1-47.8-3.3-5.2c-13.9-22.2-21.3-47.7-21.3-73.8 0-76 61.7-137.7 137.7-137.7 36.8 0 71.4 14.4 97.4 40.3 26 26 40.3 60.5 40.3 97.4 0 76-61.7 137.7-137.5 137.7v-1.3zm75.6-103.1c-4.1-2.1-24.5-12.1-28.3-13.5-3.8-1.4-6.6-2.1-9.3 2.1-2.8 4.1-10.7 13.5-13.1 16.2-2.4 2.8-4.8 3.1-8.9 1-24.5-12.2-40.5-21.9-56.7-49.7-4.3-7.4 4.3-6.9 12.2-22.9 1.4-2.8.7-5.2-.3-7.2-1-2.1-9.3-22.4-12.7-30.6-3.3-8-6.7-6.9-9.3-7.1h-7.9c-2.8 0-7.2 1-11 5.2-3.8 4.1-14.5 14.2-14.5 34.7 0 20.5 14.9 40.3 17 43.1 2.1 2.8 29.3 44.7 71 62.7 26.4 11.4 36.7 12.4 50 10.4 8-1.2 24.5-10 27.9-19.7 3.4-9.7 3.4-18 2.4-19.7-1-1.8-3.7-2.8-7.8-4.8z"
          />
        </svg>
        {CONTENT.secondary.label}
      </a>
    </section>
  )
}