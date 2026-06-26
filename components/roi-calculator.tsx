'use client'

import { useState } from 'react'
import { Reveal } from '@/components/reveal'

const WHATSAPP_URL = 'https://wa.me/27657497899'

export function RoiCalculator() {
  const [enquiries, setEnquiries] = useState('')
  const [value, setValue] = useState('')

  const enquiriesNum = Number.parseFloat(enquiries) || 0
  const valueNum = Number.parseFloat(value) || 0
  const hasInput = enquiriesNum > 0 && valueNum > 0

  const leadsLost = enquiriesNum * 0.35
  const monthlyLost = leadsLost * valueNum
  const annualLost = monthlyLost * 12

  return (
    <section className="bg-background px-6 py-[120px]">
      <div className="mx-auto max-w-[900px]">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            Your Numbers
          </p>
          <h2 className="mt-4 text-balance text-[32px] font-bold leading-tight text-foreground md:text-[42px]">
            Find out what inaction is actually costing you.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="border border-border-subtle bg-surface p-6">
              <label
                htmlFor="roi-enquiries"
                className="text-[11px] uppercase tracking-[0.12em] text-muted-text"
              >
                Monthly WhatsApp Enquiries
              </label>
              <input
                id="roi-enquiries"
                type="number"
                min="0"
                inputMode="numeric"
                placeholder="0"
                value={enquiries}
                onChange={(e) => setEnquiries(e.target.value)}
                className="mt-3 w-full border-none bg-transparent text-[36px] font-bold text-foreground outline-none placeholder:text-[#475569]"
              />
              <p className="mt-2 text-[12px] text-[#475569]">
                How many messages does your business receive per month?
              </p>
            </div>

            <div className="border border-border-subtle bg-surface p-6">
              <label
                htmlFor="roi-value"
                className="text-[11px] uppercase tracking-[0.12em] text-muted-text"
              >
                Average Transaction Value (R)
              </label>
              <input
                id="roi-value"
                type="number"
                min="0"
                inputMode="numeric"
                placeholder="0"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="mt-3 w-full border-none bg-transparent text-[36px] font-bold text-foreground outline-none placeholder:text-[#475569]"
              />
              <p className="mt-2 text-[12px] text-[#475569]">
                What is your average sale or job value in rands?
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            className="mt-4 p-9"
            style={{
              background: '#0D0D12',
              border: '1px solid rgba(59,130,246,0.2)',
            }}
          >
            <div className="flex items-center justify-between py-4">
              <span className="text-[11px] uppercase tracking-[0.1em] text-muted-text">
                Leads Lost Monthly
              </span>
              <span className="text-[32px] font-extrabold text-destructive">
                {hasInput ? `${leadsLost.toFixed(0)} leads` : '—'}
              </span>
            </div>

            <div className="border-t border-border-subtle" />

            <div className="flex items-center justify-between py-4">
              <span className="text-[11px] uppercase tracking-[0.1em] text-muted-text">
                Revenue Lost Monthly
              </span>
              <span className="text-[32px] font-extrabold text-foreground">
                {hasInput
                  ? `R${Math.round(monthlyLost).toLocaleString()}`
                  : '—'}
              </span>
            </div>

            <div className="border-t border-border-subtle" />

            <div className="flex items-center justify-between py-4">
              <span className="text-[11px] uppercase tracking-[0.1em] text-muted-text">
                Revenue Lost Annually
              </span>
              <span className="text-[32px] font-extrabold text-accent">
                {hasInput
                  ? `R${Math.round(annualLost).toLocaleString()}`
                  : '—'}
              </span>
            </div>
          </div>
        </Reveal>

        <p className="mt-4 text-center text-[13px] italic text-[#475569]">
          Based on a conservative 35% after-hours loss rate across SA small
          businesses.
        </p>

        <button
          type="button"
          onClick={() => window.open(WHATSAPP_URL, '_blank')}
          className="mt-8 w-full cursor-pointer border-none bg-accent px-4 py-4 text-[15px] font-semibold text-white transition-all duration-200 hover:brightness-110"
        >
          Fix this — WhatsApp us now →
        </button>
      </div>
    </section>
  )
}
