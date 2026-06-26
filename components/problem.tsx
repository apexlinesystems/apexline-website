'use client'

import { Reveal } from '@/components/reveal'

const cards = [
  {
    value: '73%',
    label: 'of customers expect a response within 5 minutes',
  },
  {
    value: '2×',
    label: 'higher close rate when responding in under 60 seconds',
  },
  {
    value: 'R0',
    label: "cost of the problem — until you calculate what you've lost",
  },
]

export function Problem() {
  return (
    <section className="bg-background px-6 py-[130px] md:px-20">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            The Problem
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[58%_42%] lg:gap-16">
          <Reveal>
            <h2 className="text-pretty text-[32px] font-bold leading-[1.2] text-foreground md:text-[42px]">
              Most SA businesses are losing 30–40% of their WhatsApp leads after
              hours.
            </h2>
            <p className="mt-6 max-w-[520px] text-[17px] leading-[1.7] text-muted-text">
              The customer messages. Nobody replies. They move on and book with
              whoever answered first. The business never finds out the lead
              existed. This happens every night, at scale, silently — and most
              owners have accepted it as normal.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-3">
              {cards.map((card) => (
                <div
                  key={card.value}
                  className="border border-border-subtle bg-surface p-6"
                >
                  <div className="text-[52px] font-extrabold leading-none text-foreground">
                    {card.value}
                  </div>
                  <p className="mt-3 text-[13px] text-muted-text">{card.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
