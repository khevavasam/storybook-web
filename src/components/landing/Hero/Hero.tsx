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
      <Container maxW="6xl" px={{ base: 4, md: 6 }} mx="auto">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          justify="space-between"
          gap={{ base: 10, md: 16 }}
        >
          {/* Left: text */}
          <VStack
            align={{ base: 'center', md: 'flex-start' }}
            textAlign={{ base: 'center', md: 'left' }}
            gap={6}
            flex="1"
            maxW={{ base: '2xl', md: 'xl' }}
          >
            <Heading as="h1" size={{ base: '2xl', md: '3xl' }} lineHeight="1.1">
              {t('title')}
            </Heading>

            <Text fontSize={{ base: 'md', md: 'lg' }} opacity={isDark ? 0.9 : 0.85}>
              {t('subtitle')}
            </Text>

            <HStack gap={4} pt={2} justify={{ base: 'center', md: 'flex-start' }} flexWrap="wrap">
              <Button size="lg" variant="solid">
                {t('primaryCta')}
              </Button>

              <Button size="lg" variant="outline">
                {t('secondaryCta')}
              </Button>
            </HStack>
          </VStack>

          {/* Right: illustration */}
          <Box flex="1" display={{ base: 'none', md: 'block' }} textAlign="right">
            <Image
              src="/assets/hero-illustration.png"
              alt={t('imageAlt')}
              maxW="520px"
              w="100%"
              ms="auto"
              pointerEvents="none"
              userSelect="none"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
