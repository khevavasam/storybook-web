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
 
 function getSystemColorMode(): ColorMode {
   if (typeof window === 'undefined') return 'light'
   return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
 }
 
 const STORAGE_KEY = 'chakra-color-mode'
 
 export function ColorModeProvider({ children }: PropsWithChildren) {
   const [colorMode, setColorModeState] = useState<ColorMode>('light')
 
   useEffect(() => {
     const stored = window.localStorage.getItem(STORAGE_KEY)
     if (stored === 'light' || stored === 'dark') {
       setColorModeState(stored)
       return
     }
     setColorModeState(getSystemColorMode())
   }, [])
 
   const setColorMode = useCallback((next: ColorMode) => {
     setColorModeState(next)
     window.localStorage.setItem(STORAGE_KEY, next)
   }, [])
 
   const toggleColorMode = useCallback(() => {
    setColorModeState((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      window.localStorage.setItem(STORAGE_KEY, next)
      return next
    })
  }, [])
 
   const value = useMemo<ColorModeContextValue>(
     () => ({ colorMode, setColorMode, toggleColorMode }),
     [colorMode, setColorMode, toggleColorMode],
   )
 
   return (
     <ColorModeContext.Provider value={value}>
       <Theme appearance={colorMode} minH="100dvh">
         {children}
       </Theme>
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
