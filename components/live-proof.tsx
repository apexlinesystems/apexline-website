'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Reveal } from '@/components/reveal'

type Message = {
  from: 'user' | 'ai'
  text: string
}

const initialConversation: Message[] = [
  { from: 'user', text: 'Completed 12 patrols today' },
  {
    from: 'ai',
    text:
      "✅ Logged 12 patrols. You're at 68% of your weekly target — 16 remaining. 3 days left means 6/day gets you there. Strong pace.",
  },
  { from: 'user', text: 'scoreboard' },
  {
    from: 'ai',
    text:
      '📊 Weekly Scoreboard\n\nCommitment: 50 patrols\nCompleted: 34 patrols\nProgress: 68%  🟡\nDays remaining: 3\nNeeded per day: 6\n\nOn track — keep going.',
  },
]

const aiResponses = [
  "✅ Got it — that's been logged and your lead dashboard has been updated. Reply 'scoreboard' to check your progress anytime.",
  "📋 Commitment recorded. Let's make it happen — I'll track your progress automatically throughout the week.",
  '📊 Here\'s your current scoreboard:\nWeekly target: 50 check-ins\nCompleted: 34\nProgress: 68% 🟡\nDays remaining: 3\nKeep going — you\'re on track.',
]

const pills = ['Zero missed updates', '48hr build time', 'Live since day one']

function ChatMockup() {
  const [messages, setMessages] = useState<Message[]>(initialConversation)
  const [typing, setTyping] = useState(false)
  const [input, setInput] = useState('')
  const [responseIndex, setResponseIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, typing])

  const handleSend = (e: FormEvent) => {
    e.preventDefault()
    const text = input.trim()
    if (!text || typing) return

    setMessages((m) => [...m, { from: 'user', text }])
    setInput('')

    const reply = aiResponses[responseIndex]
    setResponseIndex((i) => (i + 1) % aiResponses.length)

    const typingTimer = setTimeout(() => setTyping(true), 1000)
    const replyTimer = setTimeout(() => {
      setTyping(false)
      setMessages((m) => [...m, { from: 'ai', text: reply }])
    }, 1800)

    return () => {
      clearTimeout(typingTimer)
      clearTimeout(replyTimer)
    }
  }

  return (
    <div className="overflow-hidden rounded-lg border border-border-subtle bg-background">
      {/* header bar */}
      <div className="flex items-center justify-between bg-surface px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <span className="text-[12px] text-muted-text">
          Apexline AI · Live Demo
        </span>
        <div className="flex items-center gap-1.5">
          <span className="apex-pulse h-2 w-2 rounded-full bg-green" />
          <span className="text-[10px] font-medium text-green">ACTIVE</span>
        </div>
      </div>

      {/* chat area */}
      <div
        ref={scrollRef}
        className="apex-scroll flex max-h-[320px] flex-col gap-3 overflow-y-auto p-5 font-mono text-[13px]"
      >
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={
                msg.from === 'user'
                  ? 'max-w-[70%] whitespace-pre-line rounded-2xl rounded-tr-none bg-[#1F2937] px-3.5 py-2.5 text-white'
                  : 'max-w-[85%] whitespace-pre-line rounded-2xl rounded-tl-none bg-[#0D3B82] px-3.5 py-2.5 text-white'
              }
            >
              {msg.text}
            </div>
          </motion.div>
        ))}

        {typing && (
          <div className="flex justify-start">
            <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-none bg-[#0D3B82] px-4 py-3">
              <span className="apex-dot h-1.5 w-1.5 rounded-full bg-white" />
              <span
                className="apex-dot h-1.5 w-1.5 rounded-full bg-white"
                style={{ animationDelay: '0.2s' }}
              />
              <span
                className="apex-dot h-1.5 w-1.5 rounded-full bg-white"
                style={{ animationDelay: '0.4s' }}
              />
            </div>
          </div>
        )}
      </div>

      {/* input bar */}
      <form
        onSubmit={handleSend}
        className="flex items-center gap-3 border-t border-white/[0.06] px-4 py-3"
        style={{ background: '#0D0D12' }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Message Apexline Systems..."
          aria-label="Message Apexline Systems"
          className="flex-1 border-none bg-transparent text-[13px] text-white outline-none placeholder:text-[#475569]"
        />
        <button
          type="submit"
          aria-label="Send message"
          className="flex items-center justify-center rounded-full bg-accent p-2 transition-all duration-200 hover:brightness-110"
        >
          <ArrowRight className="h-3.5 w-3.5 text-white" aria-hidden="true" />
        </button>
      </form>
    </div>
  )
}

export function LiveProof() {
  return (
    <section id="live-demo" className="bg-surface px-6 py-[130px] md:px-20">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
            Live Proof
          </p>
          <h2 className="mt-4 max-w-[860px] text-balance text-[32px] font-bold leading-[1.2] text-foreground md:text-[42px]">
            Built for a Johannesburg operations company. Deployed in 48 hours.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-[17px] leading-[1.75] text-muted-text">
              A Johannesburg-based operations company needed to track team
              performance in real time without adding admin overhead. We built
              an AI system that works entirely over WhatsApp. Team members send
              plain-text updates. The AI classifies them, responds intelligently
              with personalised feedback, logs everything to a live dashboard,
              and sends automated weekly performance summaries. Zero manual
              work. Zero missed updates. The system has been running
              continuously since launch.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {pills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-white/10 bg-background px-5 py-2.5 text-[13px] text-foreground"
                >
                  {pill}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ChatMockup />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
