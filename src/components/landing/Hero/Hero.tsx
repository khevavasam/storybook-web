'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
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

  return (
    <Box
      as="section"
      bgGradient="radial(120% 120% at 0% 0%, #2A1245 0%, #14001F 60%)"
      color="white"
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
              opacity={0.9}
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
