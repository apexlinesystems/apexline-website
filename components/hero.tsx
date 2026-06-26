'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

const WHATSAPP_URL =
  'https://wa.me/27657497899?text=Hi%20Apexline%2C%20I%27d%20like%20to%20learn%20more'

const lines = [
  { text: 'The businesses that', className: 'text-foreground' },
  { text: 'automate first', className: 'text-foreground' },
  { text: 'win by default.', className: 'text-accent italic' },
]

const stats = [
  { value: '30–40%', label: 'OF LEADS LOST AFTER HOURS' },
  { value: '48 HRS', label: 'AVERAGE BUILD TIME' },
  { value: '24/7', label: 'SYSTEM UPTIME' },
]

function LeadsMissedCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + (Math.floor(Math.random() * 6) + 3))
    }, 1800)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.4 }}
      className="mt-10 text-[13px] text-muted-text"
    >
      Leads missed by SA businesses since you opened this page:{' '}
      <span className="text-[22px] font-extrabold text-accent tabular-nums">
        {count.toLocaleString()}
      </span>
    </motion.p>
  )
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* animated radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2">
        <div className="apex-hero-glow h-full w-full" />
      </div>
      {/* noise overlay */}
      <div className="apex-noise pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto w-full max-w-[860px] py-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8 text-[11px] font-medium uppercase tracking-[0.25em] text-accent"
        >
          AI Automation · South Africa
        </motion.p>

        <h1 className="text-balance text-[44px] font-extrabold leading-[1.05] tracking-tight md:text-[78px]">
          {lines.map((line, i) => (
            <motion.span
              key={line.text}
              className={`block ${line.className}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: 0.2 + i * 0.15,
              }}
            >
              {line.text}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.75 }}
          className="mx-auto mt-8 max-w-[580px] text-[17px] leading-[1.75] text-muted-text"
        >
          Every lead your business misses after hours is a lead your competitor
          is capturing. We build AI systems that make that impossible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.95 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#live-demo"
            className="rounded-lg bg-accent px-7 py-[13px] text-[15px] font-medium text-white transition-all duration-200 hover:brightness-110"
          >
            See It In Action →
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/20 px-7 py-[13px] text-[15px] font-medium text-foreground transition-colors duration-200 hover:border-white/50"
          >
            WhatsApp Us
          </a>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-[720px] grid-cols-3 divide-x divide-white/[0.08]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
                delay: 1.15 + i * 0.15,
              }}
              className="px-5"
            >
              <span className="text-[48px] font-extrabold leading-none text-foreground">
                {stat.value}
              </span>
              <p className="mt-3 text-[11px] uppercase tracking-[0.15em] text-muted-text">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <LeadsMissedCounter />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="apex-bounce h-5 w-5 text-accent" aria-hidden="true" />
      </motion.div>
    </section>
  )
}
