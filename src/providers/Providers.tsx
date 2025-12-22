'use client'

import { Box, ChakraProvider } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { ColorModeProvider } from '@/theme/color-mode'
import { system } from '@/theme/system'
import messages from '@/i18n/messages/en.json'
import { DynamicBackground } from '@/components/background/DynamicBackground'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <NextIntlClientProvider locale="en" messages={messages}>
        <ColorModeProvider>
          <DynamicBackground />
          <Box position="relative" zIndex={1}>
            {children}
          </Box>
        </ColorModeProvider>
      </NextIntlClientProvider>
    </ChakraProvider>
  )
}
