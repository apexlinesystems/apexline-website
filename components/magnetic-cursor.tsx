'use client'

import { useEffect, useRef, useState } from 'react'

export function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  // mutable refs avoid re-renders on every mouse move
  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const hovering = useRef(false)
  const pressing = useRef(false)
  const visible = useRef(false)

  useEffect(() => {
    const isTouch =
      window.matchMedia('(hover: none)').matches ||
      window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return
    setEnabled(true)

    const interactiveSelector = 'button, a, input, textarea, select, [role="button"], .apex-card'

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      visible.current = true
      const target = e.target as HTMLElement
      hovering.current = !!target.closest(interactiveSelector)
    }
    const onLeave = () => {
      visible.current = false
    }
    const onEnter = () => {
      visible.current = true
    }
    const onDown = () => {
      pressing.current = true
    }
    const onUp = () => {
      pressing.current = false
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    let raf = 0
    const render = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12

      const dot = dotRef.current
      const r = ringRef.current
      if (dot && r) {
        const op = visible.current ? '1' : '0'
        dot.style.opacity = op
        r.style.opacity = op

        const dotScale = pressing.current ? 0.5 : 1
        dot.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px) translate(-50%, -50%) scale(${dotScale})`

        const ringSize = hovering.current ? 52 : 36
        r.style.width = `${ringSize}px`
        r.style.height = `${ringSize}px`
        r.style.borderColor = hovering.current
          ? 'rgba(59,130,246,0.5)'
          : 'rgba(255,255,255,0.3)'
        r.style.backgroundColor = hovering.current
          ? 'rgba(59,130,246,0.05)'
          : 'transparent'
        r.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(render)
    }
    raf = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div
        ref={dotRef}
        className="apex-cursor-el pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-white"
        style={{ opacity: 0, transition: 'transform 0.1s ease-out' }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="apex-cursor-el pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border"
        style={{
          width: 36,
          height: 36,
          opacity: 0,
          borderColor: 'rgba(255,255,255,0.3)',
          transition:
            'width 0.25s ease, height 0.25s ease, border-color 0.25s ease, background-color 0.25s ease',
        }}
        aria-hidden="true"
      />
    </>
  )
}
