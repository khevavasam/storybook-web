 'use client'
 
 import { Theme } from '@chakra-ui/react'
 import type { PropsWithChildren } from 'react'
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
 
 type ColorMode = 'light' | 'dark'
 
 type ColorModeContextValue = {
   colorMode: ColorMode
   setColorMode: (next: ColorMode) => void
   toggleColorMode: () => void
 }
 
 const ColorModeContext = createContext<ColorModeContextValue | null>(null)
 
 const STORAGE_KEY = 'chakra-color-mode'
const COOKIE_KEY = STORAGE_KEY

function writeCookie(next: ColorMode) {
  document.cookie = `${COOKIE_KEY}=${next}; Path=/; Max-Age=31536000; SameSite=Lax`
}
 
 export function ColorModeProvider({
  children,
  initialColorMode = 'dark',
}: PropsWithChildren<{ initialColorMode?: ColorMode }>) {

  const [colorMode, setColorModeState] = useState<ColorMode>(() => {
    // SSR: use the value picked in RootLayout (cookie-based)
    if (typeof window === 'undefined') return initialColorMode

    // If RootLayout/script already set it on <html>, prefer that to avoid a flash
    const fromDom = document.documentElement.dataset.colorMode
    if (fromDom === 'light' || fromDom === 'dark') return fromDom

    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored === 'light' || stored === 'dark') return stored
    } catch (e) {}

    // cookie fallback
    try {
      const match = document.cookie.match(
        new RegExp(`(?:^|; )${COOKIE_KEY}=([^;]*)`),
      )
      const cookieValue = match ? decodeURIComponent(match[1]) : null
      if (cookieValue === 'light' || cookieValue === 'dark') return cookieValue
    } catch (e) {}

    return initialColorMode
  })
 
   const setColorMode = useCallback((next: ColorMode) => {
     setColorModeState(next)
     window.localStorage.setItem(STORAGE_KEY, next)
    writeCookie(next)
   }, [])
 
   const toggleColorMode = useCallback(() => {
    setColorModeState((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      window.localStorage.setItem(STORAGE_KEY, next)
      writeCookie(next)
      return next
    })
  }, [])
 
   const value = useMemo<ColorModeContextValue>(
     () => ({ colorMode, setColorMode, toggleColorMode }),
     [colorMode, setColorMode, toggleColorMode],
   )
 
  useEffect(() => {
    document.documentElement.dataset.colorMode = colorMode
    document.documentElement.style.colorScheme = colorMode
    try {
      window.localStorage.setItem(STORAGE_KEY, colorMode)
    } catch (e) {}
  }, [colorMode])

   return (
     <ColorModeContext.Provider value={value}>
      <div suppressHydrationWarning>
        <Theme appearance={colorMode} minH="100dvh">
          {children}
        </Theme>
      </div>
     </ColorModeContext.Provider>
   )
 }
 
 export function useColorMode() {
   const ctx = useContext(ColorModeContext)
   if (!ctx) {
     throw new Error('useColorMode must be used within ColorModeProvider')
   }
   return ctx
 }
