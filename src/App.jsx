import Hero from './blocks/Hero'
import Headline from './blocks/Headline'
import CtaButton from './blocks/CtaButton'
import Disclaimer from './blocks/Disclaimer'

export default function App() {
  return (
    <main className="relative w-full bg-[#050510] flex flex-col min-h-screen min-h-[100dvh]">
      {/* Fundo do estádio desfocado (posição absoluta cobrindo tudo) */}
      <Hero />

      {/* Conteúdo centralizado sobre o fundo */}
      <div className="relative flex-1 flex flex-col items-center justify-center gap-6 lg:gap-14 py-6 lg:py-24 min-h-0">
        <Headline />
        <CtaButton />
      </div>

      {/* Rodapé com selo */}
      <Disclaimer />
    </main>
  )
}
