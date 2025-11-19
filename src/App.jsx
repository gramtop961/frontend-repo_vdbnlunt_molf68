import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'

function App() {
  return (
    <div className="min-h-screen bg-amber-50 text-stone-800">
      {/* Paper grain overlay */}
      <div className="pointer-events-none fixed inset-0 z-[1] opacity-50 mix-blend-multiply" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />

      {/* Header brand strip */}
      <header className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-block w-8 h-8 rounded bg-orange-400 shadow-inner" />
            <span className="font-semibold tracking-tight text-stone-800">StoryCassettes</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-stone-700/80">
            <a href="#features" className="hover:text-stone-900">Features</a>
            <a href="#shop" className="hover:text-stone-900">Shop</a>
            <a href="#telegram" className="hover:text-stone-900">Community</a>
          </nav>
        </div>
      </header>

      <main className="relative z-10">
        <Hero />
        <Features />
      </main>

      <footer className="relative z-10 py-10 text-center text-sm text-stone-600 border-t border-stone-200/60 bg-amber-50/60">
        <p>© {new Date().getFullYear()} StoryCassettes — Warm nostalgia, modern playback.</p>
      </footer>
    </div>
  )
}

export default App
