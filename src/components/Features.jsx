import React from 'react'
import { MessageCircle, Play, Usb } from 'lucide-react'

const Feature = ({ icon: Icon, title, description, bg }) => (
  <div className="flex flex-col items-center text-center p-6 rounded-2xl shadow-sm" style={{ background: bg }}>
    <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-inner" style={{ background: 'rgba(255,255,255,0.6)' }}>
      <Icon className="w-7 h-7 text-stone-700" />
    </div>
    <h3 className="text-lg font-semibold text-stone-800">{title}</h3>
    <p className="text-stone-700/80 mt-1 text-sm">{description}</p>
  </div>
)

function Features() {
  return (
    <section className="relative py-14 md:py-16" id="features">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,237,213,0.7),transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          <Feature
            icon={MessageCircle}
            title="Join our Telegram channel"
            description="Connect with fellow nostalgia lovers and get updates."
            bg="linear-gradient(180deg, rgba(186,230,253,0.5), rgba(224,242,254,0.7))"
          />
          <Feature
            icon={Play}
            title="Watch nostalgic stories come life"
            description="Enjoy curated read-along videos with warm, vintage flair."
            bg="linear-gradient(180deg, rgba(254,215,170,0.5), rgba(255,237,213,0.7))"
          />
          <Feature
            icon={Usb}
            title="Order your collectible USB flash drives"
            description="Bring the retro cassette vibe to modern devices."
            bg="linear-gradient(180deg, rgba(187,247,208,0.5), rgba(220,252,231,0.7))"
          />
        </div>
      </div>
    </section>
  )
}

export default Features
