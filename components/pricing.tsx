'use client'

import { Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal } from '@/components/reveal'

const WHATSAPP_URL =
  'https://wa.me/27657497899?text=Hi%20Apexline%2C%20I%27d%20like%20to%20start%20a%20conversation'

const tiers = [
  {
    label: 'SIMPLE BUILD',
    setup: 'R5,000',
    retainer: 'R2,500 / month',
    description: 'Single-channel automation for businesses getting started',
    features: [
      'WhatsApp AI Receptionist or Web Chatbot',
      'Lead capture and qualification flow',
      'Owner notification system',
      'Live Google Sheets dashboard',
      'Landing page build and deployment',
      '1 month post-launch optimisation',
    ],
    cta: 'Start a conversation',
    featured: false,
  },
  {
    label: 'GROWTH BUILD',
    setup: 'R12,000',
    retainer: 'R4,500 / month',
    description: 'Multi-touchpoint automation for scaling operations',
    features: [
      'Everything in Simple Build',
      'CRM integration',
      'Multi-channel automation suite',
      'Database reactivation campaigns',
      'Email sequences',
      'Booking and calendar sync',
      'Advanced analytics dashboard',
    ],
    cta: 'Start a conversation',
    featured: true,
  },
  {
    label: 'FULL SYSTEM',
    setup: 'R25,000+',
    retainer: 'R7,500+ / month',
    description: 'Complete AI operational transformation at any scale',
    features: [
      'Everything in Growth Build',
      'Custom AI agents',
      'Full API ecosystem',
      'Content automation pipelines',
      'Team management tools',
      'Bespoke workflow architecture',
      'Dedicated priority build and support',
    ],
    cta: 'Get a custom quote',
    featured: false,
  },
]

export function Pricing() {
  return (
    <section className="bg-background px-6 py-[130px] md:px-20">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            The Investment
          </p>
          <h2 className="mt-4 text-balance text-[36px] font-bold leading-tight text-foreground md:text-[48px]">
            Three ways in. All built from scratch.
          </h2>
          <p className="mt-4 max-w-[620px] text-[17px] leading-relaxed text-muted-text">
            No templates. No off-the-shelf solutions. Every system designed
            around your operation.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
              className={`relative flex flex-col p-9 ${
                tier.featured
                  ? 'border border-accent bg-[#0D1525]'
                  : 'border border-border-subtle bg-surface'
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                  Most Popular
                </span>
              )}

              <p
                className={`text-[10px] uppercase tracking-[0.2em] ${
                  tier.featured ? 'text-accent-muted' : 'text-muted-text'
                }`}
              >
                {tier.label}
              </p>

              <div className="mt-5 text-[52px] font-extrabold leading-none text-foreground">
                {tier.setup}
              </div>
              <p className="mt-2 text-[15px] text-muted-text">{tier.retainer}</p>

              <div className="my-6 border-t border-white/5" />

              <p className="text-[13px] italic text-muted-text">
                {tier.description}
              </p>

              <div className="my-6 border-t border-white/5" />

              <ul className="flex flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-green"
                      aria-hidden="true"
                    />
                    <span className="text-[13px] leading-snug text-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block rounded-md px-4 py-3 text-center text-[14px] font-medium transition-colors duration-200 ${
                  tier.featured
                    ? 'bg-accent text-white hover:brightness-110'
                    : 'border border-white/20 text-foreground hover:border-white/60'
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <Reveal>
          <p className="mx-auto mt-10 max-w-[720px] text-center text-[14px] leading-relaxed text-muted-text">
            All retainers include hosting, monthly optimisation, performance
            reports, updates and improvements, and priority support.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
