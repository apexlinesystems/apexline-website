'use client'

import { Reveal } from '@/components/reveal'

const WHATSAPP_URL =
  'https://wa.me/27657497899?text=Hi%20Apexline%2C%20I%27d%20like%20to%20start%20a%20conversation'

const contacts = [
  { label: 'WhatsApp', value: '+27 65 749 7899', href: WHATSAPP_URL },
  {
    label: 'Email',
    value: 'apexlinesystems@gmail.com',
    href: 'mailto:apexlinesystems@gmail.com',
  },
  {
    label: 'Live Demo',
    value: 'See the AI in action',
    href: '#live-demo',
  },
]

export function Close() {
  return (
    <section className="bg-background px-6 py-[180px]">
      <div className="mx-auto max-w-[680px] text-center">
        <Reveal>
          <h2 className="text-balance text-[36px] font-extrabold leading-tight text-foreground md:text-[52px]">
            Every build starts with a conversation.
          </h2>
          <p className="mx-auto mt-6 max-w-[560px] text-[17px] leading-[1.75] text-muted-text">
            Tell us what your business needs. We will tell you exactly what we
            would build and what it would cost — before you commit to anything.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-accent px-8 py-3.5 text-[15px] font-medium text-white transition-all duration-200 hover:brightness-110"
            >
              WhatsApp +27 65 749 7899
            </a>
            <a
              href="#live-demo"
              className="rounded-lg border border-white/20 px-8 py-3.5 text-[15px] font-medium text-foreground transition-colors duration-200 hover:border-white/50"
            >
              See It In Action
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group"
              >
                <p className="text-[10px] uppercase tracking-[0.15em] text-accent">
                  {c.label}
                </p>
                <p className="mt-2 break-words text-[14px] text-foreground transition-colors group-hover:text-accent-muted">
                  {c.value}
                </p>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
