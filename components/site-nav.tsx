'use client'

import { useEffect, useState } from 'react'

const WHATSAPP_URL =
  'https://wa.me/27657497899?text=Hi%20Apexline%2C%20I%27d%20like%20to%20learn%20more'

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'border-b border-white/5 bg-background/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 md:px-20">
        <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-foreground">
          Apexline Systems
        </span>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/20 px-4 py-2 text-[13px] font-medium text-foreground transition-colors duration-200 hover:border-accent hover:bg-accent"
        >
          WhatsApp Us
        </a>
      </nav>
    </header>
  )
}
