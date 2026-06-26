'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Reveal } from '@/components/reveal'

const capabilities = [
  ['WhatsApp AI Receptionist', 'Captures and qualifies leads 24/7 automatically'],
  ['Website AI Chatbot', 'Converts visitors into booked appointments'],
  ['Lead Capture & Qualification', 'Scores and routes every enquiry intelligently'],
  ['CRM Integration', 'Syncs every lead into your existing pipeline'],
  ['Workflow Automation', 'Eliminates repetitive manual tasks permanently'],
  ['Database Reactivation', 'Re-engages dormant customers automatically'],
  ['Email Marketing Automation', 'Sequences that run entirely while you sleep'],
  ['Booking & Scheduling', 'Fills your calendar without a receptionist'],
  ['Live Dashboards & Analytics', 'Real-time visibility into every metric that matters'],
  ['API & Platform Integrations', 'Connects any tool to any other tool seamlessly'],
  ['Notification & Alert Systems', 'You are always the first to know'],
  ['Landing Page Builds', 'Conversion-optimised, deployed in hours not weeks'],
  ['Custom AI Agents', 'AI that understands your specific business context'],
  ['Content Automation Pipelines', 'Content that creates and distributes itself'],
  ['Performance Tracking', 'Measures what matters and reports automatically'],
  ['Full Operational Systems', 'End-to-end automation of entire business functions'],
]

const filters = [
  'All',
  'Dental & Medical',
  'Real Estate',
  'Trades & Construction',
  'Retail & Service',
] as const

type Filter = (typeof filters)[number]

const relevance: Record<Exclude<Filter, 'All'>, string[]> = {
  'Dental & Medical': [
    'WhatsApp AI Receptionist',
    'Website AI Chatbot',
    'Lead Capture & Qualification',
    'Booking & Scheduling',
    'Notification & Alert Systems',
    'Landing Page Builds',
    'Custom AI Agents',
    'Live Dashboards & Analytics',
  ],
  'Real Estate': [
    'WhatsApp AI Receptionist',
    'Lead Capture & Qualification',
    'CRM Integration',
    'Database Reactivation',
    'Email Marketing Automation',
    'Live Dashboards & Analytics',
    'API & Platform Integrations',
    'Performance Tracking',
  ],
  'Trades & Construction': [
    'WhatsApp AI Receptionist',
    'Lead Capture & Qualification',
    'Notification & Alert Systems',
    'Booking & Scheduling',
    'Workflow Automation',
    'Landing Page Builds',
    'Live Dashboards & Analytics',
    'Custom AI Agents',
  ],
  'Retail & Service': [
    'WhatsApp AI Receptionist',
    'Website AI Chatbot',
    'Database Reactivation',
    'Email Marketing Automation',
    'Content Automation Pipelines',
    'CRM Integration',
    'Performance Tracking',
    'Full Operational Systems',
  ],
}

export function Capabilities() {
  const [active, setActive] = useState<Filter>('All')

  const isRelevant = (name: string) =>
    active === 'All' || relevance[active].includes(name)

  return (
    <section
      className="px-6 py-[130px] md:px-20"
      style={{
        background: 'linear-gradient(to bottom, #030303, #05050F)',
      }}
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            Capabilities
          </p>
          <h2 className="mt-4 text-balance text-[36px] font-bold leading-tight text-foreground md:text-[48px]">
            One infrastructure. Infinite applications.
          </h2>
          <p className="mt-4 max-w-[560px] text-[17px] leading-relaxed text-muted-text">
            Every system is designed from scratch around your business. No
            templates.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {filters.map((filter) => {
              const selected = filter === active
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActive(filter)}
                  className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-200 ${
                    selected
                      ? 'border-none bg-accent text-white'
                      : 'border border-white/[0.12] bg-transparent text-muted-text hover:border-white/30 hover:text-foreground'
                  }`}
                >
                  {filter}
                </button>
              )
            })}
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(([name, desc], i) => {
            const relevant = isRelevant(name)
            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  ease: 'easeOut',
                  delay: (i % 4) * 0.06,
                }}
              >
                <div
                  className="group h-full border border-border-subtle bg-surface px-6 py-5 transition-[border-color,background-color,opacity,transform] duration-[250ms] ease-out hover:border-accent/50 hover:bg-[#0F1520]"
                  style={{
                    opacity: relevant ? 1 : 0.25,
                    transform: relevant ? 'scale(1)' : 'scale(0.98)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="text-[14px] font-medium text-foreground">
                      {name}
                    </span>
                  </div>
                  <p className="mt-2 text-[12px] leading-relaxed text-muted-text">
                    {desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
