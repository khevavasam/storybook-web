'use client'

import { Box, ChakraProvider } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { ColorModeProvider } from '@/theme/color-mode'
import { system } from '@/theme/system'
import messages from '@/i18n/messages/en.json'
import { DynamicBackground } from '@/components/background/DynamicBackground'

export function Providers({
  children,
  initialColorMode,
}: {
  children: ReactNode
  initialColorMode?: 'light' | 'dark'
}) {
  return (
    <ChakraProvider value={system}>
      <NextIntlClientProvider
        locale="en"
        messages={messages}
        onError={(error) => {
          // Avoid hard-crashing the app in dev for missing translations.
          // Missing keys are still visible via `getMessageFallback`.
          if (
            error &&
            typeof error === 'object' &&
            'code' in error &&
            (error as { code?: unknown }).code === 'MISSING_MESSAGE'
          ) {
            return
          }

          // eslint-disable-next-line no-console
          console.error(error)
        }}
        getMessageFallback={({ namespace, key }) =>
          namespace ? `${namespace}.${key}` : key
        }
      >
        <ColorModeProvider initialColorMode={initialColorMode}>
          <DynamicBackground />
          <Box position="relative" zIndex={1}>
            {children}
          </Box>
        </ColorModeProvider>
      </NextIntlClientProvider>
    </ChakraProvider>
  )
}
