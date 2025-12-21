'use client'

import { ChakraProvider } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { ColorModeProvider } from '@/theme/color-mode'
import { system } from '@/theme/system'
import messages from '@/i18n/messages/en.json'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <NextIntlClientProvider locale="en" messages={messages}>
        <ColorModeProvider>{children}</ColorModeProvider>
      </NextIntlClientProvider>
    </ChakraProvider>
  )
}
