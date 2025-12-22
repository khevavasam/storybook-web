'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import { useColorMode } from '@/theme/color-mode'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'

export const Hero: React.FC = () => {
  const t = useTranslations('Landing.Hero')
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <Box
      as="section"
      // В light теме не задаём тёмный градиент и белый текст — иначе не читается.
      bgGradient={
        isDark ? 'radial(120% 120% at 0% 0%, #2A1245 0%, #14001F 60%)' : undefined
      }
      color={isDark ? 'white' : 'gray.900'}
      py={{ base: 16, md: 24 }}
      overflow="hidden"
    >
      <Container maxW="6xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          gap={{ base: 12, md: 16 }}
        >
          {/* Left: text */}
          <VStack align="start" gap={6} flex="1">
            <Heading
              as="h1"
              size={{ base: '2xl', md: '3xl' }}
              lineHeight="1.1"
              maxW="xl"
            >
              {t('title')}
            </Heading>

            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              opacity={isDark ? 0.9 : 0.85}
              maxW="lg"
            >
              {t('subtitle')}
            </Text>

            <HStack gap={4} pt={2}>
              <Button size="lg" variant="solid">
                {t('primaryCta')}
              </Button>

              <Button size="lg" variant="outline">
                {t('secondaryCta')}
              </Button>
            </HStack>
          </VStack>

          {/* Right: illustration */}
          <Box
            flex="1"
            display={{ base: 'none', md: 'block' }}
            textAlign="right"
          >
            <Image
              src="/assets/hero-illustration.png"
              alt={t('imageAlt')}
              maxW="100%"
              mx="auto"
              pointerEvents="none"
              userSelect="none"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
