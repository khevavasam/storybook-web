'use client'

import React, { useEffect, useMemo, useRef } from 'react'

import { useColorMode } from '@/theme/color-mode'

type VantaEffect = {
  destroy?: () => void
  setOptions?: (options: Record<string, unknown>) => void
}

type VantaGlobal = Window & {
  VANTA?: {
    BIRDS?: (options: Record<string, unknown>) => VantaEffect
  }
}

export function DynamicBackground() {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  const elRef = useRef<HTMLDivElement | null>(null)
  const effectRef = useRef<VantaEffect | null>(null)

  const birdSize = isDark ? 1.35 : 1.55
  const wingSpan = isDark ? 20.0 : 22.0

  const themeOptions = useMemo(() => {
    return {
      backgroundColor: isDark ? 0x1e0a28 : 0xfff6f0,
      color1: isDark ? 0xf0c27b : 0xe83d6d,
      color2: isDark ? 0xd8943b : 0xe83d6d,
      colorMode: 'varianceGradient',
    }
  }, [isDark])

  useEffect(() => {
    if (!elRef.current) return

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
    if (reduceMotion) return

    let cancelled = false

    const create = () => {
      const el = elRef.current
      if (!el || cancelled) return

      const birds = (window as VantaGlobal).VANTA?.BIRDS
      if (!birds) return


      effectRef.current?.destroy?.()
      effectRef.current = birds({
        el,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        birdSize,
        wingSpan,
        quantity: 4.0,
        ...themeOptions,
      })
    }

    if ((window as VantaGlobal).VANTA?.BIRDS) {
      create()
    } else {
      const script = document.getElementById('vanta-birds') as HTMLScriptElement | null
      script?.addEventListener('load', create, { once: true })
    }

    return () => {
      cancelled = true
      effectRef.current?.destroy?.()
      effectRef.current = null
    }
  }, [themeOptions, birdSize, wingSpan])

  return (
    <div
      ref={elRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        backgroundColor: isDark ? '#1e0a28' : '#fff6f0',
      }}
    />
  )
}

