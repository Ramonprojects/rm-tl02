// ============================================================================
// EDITE OS TEXTOS E LINK AQUI
// ============================================================================
const CONTENT = {
  label: 'Quero meu acesso',
  href: 'https://wa.me/', // TROQUE pelo link do grupo (WhatsApp/Telegram)
}

export default function CtaButton() {
  const handleClick = () => {
    window.open(CONTENT.href, '_blank')
  }

  return (
    <section className="px-6 w-full max-w-md">
      <button
        onClick={handleClick}
        className="group relative w-full h-16 rounded-full overflow-hidden cursor-pointer active:scale-95 transition-transform animate-[breathe-cta_2.4s_ease-in-out_infinite]"
        style={{ backgroundColor: '#2AABEE' }}
      >
        {/* Faixa branca brilhante deslizando por cima (shine sweep) */}
        <span className="pointer-events-none absolute inset-0 overflow-hidden">
          <span className="absolute top-0 -left-1/3 h-full w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent skew-x-12 animate-[shine-sweep_3s_ease-in-out_infinite]" />
        </span>

        {/* Highlight glossy no topo */}
        <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent" />

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
            className="text-black text-lg lg:text-xl tracking-wider uppercase"
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
      </button>
    </section>
  )
}
