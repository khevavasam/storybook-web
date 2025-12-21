'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import {
  Box,
  Button,
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
    <Box as="section" id="pricing" py={{ base: 16, md: 24 }}>
      <Container maxW="6xl">
        <Stack gap={10}>
          <Stack gap={3} maxW="lg">
            <Heading as="h2" size="lg">
              {t('title')}
            </Heading>
            <Text color="fg.muted">{t('subtitle')}</Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
            {plans.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                selected={selectedPlanId === plan.id}
                onSelect={setSelectedPlanId}
              />
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  )
}
