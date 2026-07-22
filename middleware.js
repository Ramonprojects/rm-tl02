export const config = { matcher: '/' }

export default function middleware(req) {
  const ua = (req.headers.get('user-agent') || '').toLowerCase()
  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim()

  const botUAs = [
    'facebookexternalhit', 'facebot', 'facebookbot',
    'adsbot', 'googlebot', 'bingbot', 'twitterbot',
    'linkedinbot', 'slackbot', 'whatsapp', 'telegrambot',
    'crawler', 'spider', 'headless', 'phantom', 'python',
    'curl', 'wget', 'java/', 'apache-httpclient'
  ]

  const metaIPs = [
    '66.220.', '69.63.', '69.171.', '173.252.',
    '31.13.', '157.240.', '179.60.', '204.15.'
  ]

  const isBot = botUAs.some(b => ua.includes(b))
  const isMeta = metaIPs.some(r => ip.startsWith(r))

  if (isBot || isMeta) {
    return Response.redirect('https://bateu.bet.br/', 302)
  }
}
