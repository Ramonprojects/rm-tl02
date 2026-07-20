import stadium from '../assets/stadium.webp'

export default function Hero() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <img
        src={stadium}
        alt=""
        aria-hidden="true"
        width={1140}
        height={760}
        fetchPriority="high"
        decoding="async"
        className="w-full h-full object-cover blur-[6px] scale-110 brightness-[0.85] saturate-100"
      />
      {/* Vignette pra puxar o olho pro centro */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(5,5,16,0.05) 0%, rgba(5,5,16,0.25) 65%, rgba(5,5,16,0.6) 100%)',
        }}
      />
    </div>
  )
}
