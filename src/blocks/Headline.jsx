// ============================================================================
// EDITE OS TEXTOS AQUI
// ============================================================================
const CONTENT = {
  titleLine1: 'ACESSO',
  titleLine2: 'LIBERADO',
  subtitle: {
    prefix: 'Entre agora no',
    highlight: 'maior grupo gratuito',
    suffix: 'do Brasil',
  },
}

export default function Headline() {
  return (
    <div className="text-center px-6">
      <h1 className="font-display leading-[0.9] tracking-tight">
        <span className="block text-6xl min-[400px]:text-7xl lg:text-9xl bg-gradient-to-b from-sky-300 via-sky-400 to-sky-700 bg-clip-text text-transparent bg-[length:200%_100%] animate-[text-shine_5s_linear_infinite] [filter:drop-shadow(0_6px_16px_rgba(0,0,0,0.85))_drop-shadow(0_0_28px_rgba(42,171,238,0.4))]">
          {CONTENT.titleLine1}
        </span>
        <span className="block text-6xl min-[400px]:text-7xl lg:text-9xl bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent [filter:drop-shadow(0_6px_16px_rgba(0,0,0,0.85))_drop-shadow(0_2px_8px_rgba(0,0,0,0.6))]">
          {CONTENT.titleLine2}
        </span>
      </h1>

      <p className="mt-6 text-white font-extrabold text-lg lg:text-2xl uppercase leading-tight tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
        {CONTENT.subtitle.prefix}{' '}
        <span className="text-sky-400">{CONTENT.subtitle.highlight}</span>{' '}
        {CONTENT.subtitle.suffix}
      </p>
    </div>
  )
}
