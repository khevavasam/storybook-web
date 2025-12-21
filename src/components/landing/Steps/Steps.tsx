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
      <Container maxW="6xl">
        <Stack gap={10} align="center">
          {/* Title */}
          <Stack gap={3} textAlign="center" maxW="xl">
            <Heading as="h2" size="lg">
              {t('title')}
            </Heading>
            <Text color="fg.muted">
              {t('subtitle')}
            </Text>
          </Stack>

          {/* Steps */}
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} w="full">
            {steps.map((step, index) => (
              <Box
                key={index}
                p={6}
                borderRadius="xl"
                bg="chakra-subtle-bg"
              >
                <Stack gap={3}>
                  <Text fontSize="2xl">{step.icon}</Text>

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
