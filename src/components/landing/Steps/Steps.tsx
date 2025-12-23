'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'

import styles from './Steps.module.css'

export const Steps: React.FC = () => {
  const t = useTranslations('Landing.Steps')

  const steps = [
    {
      icon: '🧩',
      title: t('steps.choose.title'),
      description: t('steps.choose.description'),
    },
    {
      icon: '📖',
      title: t('steps.read.title'),
      description: t('steps.read.description'),
    },
    {
      icon: '💫',
      title: t('steps.save.title'),
      description: t('steps.save.description'),
    },
  ]

  return (
    <Box as="section" id="how" py={{ base: 16, md: 24 }}>
      <Container maxW="6xl" px={{ base: 4, md: 6 }} mx="auto">
        <Stack gap={10} align="center">
          <Stack gap={3} textAlign="center" maxW="xl">
            <Heading
              as="h2"
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
          </Stack>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            gap={8}
            w="full"
            maxW={{ base: '320px', md: '1100px' }}
            mx="auto"
            justifyItems="center"
          >
            {steps.map((step, index) => (
              <Box
                key={index}
                p={8}
                borderRadius="2xl"
                bg="chakra-subtle-bg"
                w="full"
                maxW="360px"
                className={styles.card}
              >
                <Stack gap={3}>
                  <Text fontSize="2xl" className={styles.icon}>
                    {step.icon}
                  </Text>

                  <Heading as="h3" size="sm">
                    {step.title}
                  </Heading>

                  <Text fontSize="sm" color="fg.muted">
                    {step.description}
                  </Text>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  )
}
