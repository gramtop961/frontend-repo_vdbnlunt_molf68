import React from 'react'
import { motion } from 'framer-motion'
import CassetteIllustration from './CassetteIllustration'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Watercolor/sepia background */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-70" />
        <div className="absolute inset-0 bg-amber-50/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.5),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,220,180,0.35),transparent_45%)]" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        {/* Vignette */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_120px_rgba(76,54,41,0.35)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-800 drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]"
              style={{ fontFamily: 'Georgia, Times, \"Times New Roman\", serif' }}
            >
              <span className="block text-[40px] md:text-[54px] lg:text-[64px] leading-tight font-medium" style={{ fontFamily: '"Parisienne", cursive' }}>
                Relive the Magic of Classic Read-Along Stories
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-5 text-lg md:text-xl text-stone-700/90 max-w-xl"
              style={{ fontFamily: 'Georgia, Times, "Times New Roman", serif' }}
            >
              Mixing old nostalgia and new technology to bring the best audio-visual experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#telegram"
                className="inline-flex items-center rounded-full px-5 py-3 text-white bg-sky-600 hover:bg-sky-700 shadow-sm shadow-sky-900/20 transition-colors"
              >
                Join Telegram Channel
              </a>
              <a
                href="#shop"
                className="inline-flex items-center rounded-full px-5 py-3 text-white bg-orange-500 hover:bg-orange-600 shadow-sm shadow-orange-900/20 transition-colors"
              >
                Shop Flash USB Cassettes
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-amber-100/40 blur-2xl rounded-3xl" aria-hidden="true" />
            <CassetteIllustration className="w-full h-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
