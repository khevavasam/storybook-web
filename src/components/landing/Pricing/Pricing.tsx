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

import { PlanCard } from './PlanCard'
import type { Plan } from './types'

export const Pricing: React.FC = () => {
  const t = useTranslations('Landing.Pricing')

  const plans: Plan[] = [
    {
      id: 'starter',
      name: t('plans.starter.name'),
      price: { amount: '€0', period: t('period.free') },
      subPriceText: t('plans.starter.subPriceText'),
      badges: [t('badges.free')],
      rpsLabel: t('stats.label'),
      rps: 10,
      features: t.raw('plans.starter.features'),
      cta: t('plans.starter.cta'),
    },
    {
      id: 'pro',
      name: t('plans.pro.name'),
      price: { amount: '€7.99', period: t('period.month') },
      subPriceText: t('plans.pro.subPriceText'),
      badges: [t('badges.popular')],
      rpsLabel: t('stats.label'),
      rps: 50,
      features: t.raw('plans.pro.features'),
      cta: t('plans.pro.cta'),
    },
    {
      id: 'family',
      name: t('plans.family.name'),
      price: { amount: '€14.99', period: t('period.month') },
      subPriceText: t('plans.family.subPriceText'),
      badges: [t('badges.bestValue')],
      rpsLabel: t('stats.label'),
      rps: 120,
      features: t.raw('plans.family.features'),
      cta: t('plans.family.cta'),
    },
  ]

  const [selectedPlanId, setSelectedPlanId] = React.useState<string>(plans[1]?.id ?? plans[0]!.id)

  return (
    <Box
      as="section"
      id="pricing"
      py={{ base: 16, md: 24 }}
      scrollMarginTop="88px"
    >
      <Container maxW="6xl" px={{ base: 4, md: 6 }} mx="auto">
        <Stack gap={10}>
          <Stack gap={3} maxW="lg" textAlign="center" mx="auto">
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

          <Box id="pricing-plans" scrollMarginTop="88px">
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              gap={6}
              w="full"
              maxW={{ base: '360px', md: '1200px' }}
              mx="auto"
              justifyItems="center"
            >
              {plans.map((plan) => (
                <Box key={plan.id} w="full" maxW="360px">
                  <PlanCard
                    plan={plan}
                    selected={selectedPlanId === plan.id}
                    onSelect={setSelectedPlanId}
                  />
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
