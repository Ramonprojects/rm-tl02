import seloEsportiva from '../assets/selo-esportiva.png'

export default function Disclaimer() {
  return (
    <footer className="relative z-10 w-full h-[10vh] flex items-center justify-center">
      <img
        src={seloEsportiva}
        alt="Selo de conformidade: publi, 18+, autorização SPA/MF"
        className="max-h-full max-w-full w-auto h-auto"
      />
    </footer>
  )
}
