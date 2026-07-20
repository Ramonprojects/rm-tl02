import seloEsportiva from '../assets/selo-esportiva.png'

export default function Disclaimer() {
  return (
    <footer className="relative z-10 w-full h-[10vh] h-[10dvh] flex items-center justify-center">
      <img
        src={seloEsportiva}
        alt="Selo de conformidade: #PUBLI BateuBet, 18+, autorização Ministério da Fazenda SPA/MF 523/2025"
        width={1080}
        height={199}
        loading="lazy"
        decoding="async"
        className="max-h-full max-w-full w-auto h-auto"
      />
    </footer>
  )
}
