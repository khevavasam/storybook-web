'use client'

import React from 'react'
import NextImage from 'next/image'
import { useTranslations } from 'next-intl'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react'
import styles from './Hero.module.css'

import heroDark from '../../../../public/hero/hero-dark.png'
import heroLight from '../../../../public/hero/hero-light.png'

export const Hero: React.FC = () => {
  const t = useTranslations('Landing.Hero')

  return (
    <Box
      as="section"
      className={styles.root}
      pt={{
        base: 'calc(88px + 24px)',
        md: 'calc(88px + 40px)',
      }}
      pb={{ base: 16, md: 24 }}
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
            <Heading
              as="h1"
              size={{ base: '2xl', md: '3xl' }}
              lineHeight="1.05"
              letterSpacing="-0.02em"
              color="primary.default"
            >
              {t('title')}
            </Heading>

            <Text fontSize={{ base: 'md', md: 'lg' }} color="fg.muted">
              {t('subtitle')}
            </Text>

            <HStack gap={4} pt={2} justify={{ base: 'center', md: 'flex-start' }} flexWrap="wrap">
              <Button size="lg" variant="solid" borderRadius="full" px={7} minH={12}>
                {t('primaryCta')}
              </Button>

              <Button size="lg" variant="outline" borderRadius="full" px={7} minH={12}>
                {t('secondaryCta')}
              </Button>
            </HStack>
          </VStack>

          {/* Right: illustration */}
          <Box
            flex="1"
            w="full"
            mt={{ base: 10, md: 0 }}
            display={{ base: 'block', md: 'block' }}
            textAlign={{ base: 'center', md: 'right' }}
          >
            <Box
              className={styles.illustration}
              style={{ aspectRatio: `${heroDark.width} / ${heroDark.height}` }}
              pointerEvents="none"
              userSelect="none"
            >
              <NextImage
                src={heroLight}
                alt={t('imageAlt')}
                fill
                priority
                sizes="(max-width: 900px) 70vw, (max-width: 1100px) 340px, 400px"
                className={`${styles.image} ${styles.light}`}
              />
              <NextImage
                src={heroDark}
                alt={t('imageAlt')}
                fill
                priority
                sizes="(max-width: 900px) 70vw, (max-width: 1100px) 340px, 400px"
                className={`${styles.image} ${styles.dark}`}
              />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
