import Hero from './blocks/Hero'
import Headline from './blocks/Headline'
import CtaButton from './blocks/CtaButton'
import Disclaimer from './blocks/Disclaimer'

export default function App() {
  return (
    <main className="relative min-h-screen w-full bg-[#050510] flex flex-col overflow-hidden">
      {/* Fundo do estádio desfocado (posição absoluta cobrindo tudo) */}
      <Hero />

      {/* Conteúdo centralizado sobre o fundo */}
      <div className="relative flex-1 flex flex-col items-center justify-center gap-10 lg:gap-14 py-16 lg:py-24">
        <Headline />
        <CtaButton />
      </div>

      {/* Rodapé com selo */}
      <Disclaimer />
    </main>
  )
}
