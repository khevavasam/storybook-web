'use client'

import React from 'react'
import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Check, X } from '@phosphor-icons/react'

import type { Plan } from './types'
import styles from './PlanCard.module.css'

export interface PlanCardProps {
  plan: Plan
  selected?: boolean
  onSelect?: (planId: string) => void
}

export const PlanCard: React.FC<PlanCardProps> = ({
  plan,
  selected = false,
  onSelect,
}) => {
  const handleSelect = () => {
    onSelect?.(plan.id)
  }

  return (
    <Box
      borderWidth="1px"
      borderRadius="2xl"
      p={6}
      cursor={onSelect ? 'pointer' : 'default'}
      className={styles.card}
      data-selected={selected ? 'true' : 'false'}
      onClick={handleSelect}
    >
      <Stack gap={6}>
        {plan.badges.length > 0 && (
          <HStack gap={2} flexWrap="wrap">
            {plan.badges.map((badge) => (
              <Badge
                key={badge}
                size="sm"
                borderRadius="full"
                variant="subtle"
                className={styles.badge}
                px={3}
                py={1}
                fontSize="xs"
                lineHeight="1"
              >
                {badge}
              </Badge>
            ))}
          </HStack>
        )}

        <Stack gap={2}>
          <Heading as="h3" size="md" letterSpacing="-0.01em">
            {plan.name}
          </Heading>

          <HStack align="baseline" gap={2}>
            <Text fontSize="3xl" fontWeight="800" letterSpacing="-0.02em">
              {plan.price.amount}
            </Text>
            <Text color="fg.muted">{plan.price.period}</Text>
          </HStack>

          <Text color="fg.muted" fontSize="sm">
            {plan.subPriceText}
          </Text>

          <HStack gap={2}>
            <Text fontSize="sm" color="fg.muted">
              {plan.rpsLabel}
            </Text>
            <Badge variant="outline" borderRadius="full" px={3} py={1} fontSize="xs">
              {plan.rps}
            </Badge>
          </HStack>
        </Stack>

        <Box as="hr" borderTopWidth="1px" borderColor="border.default" opacity={0.7} />

        {/* Features */}
        <Stack as="ul" gap={3} ps={0} m={0} listStyleType="none">
          {plan.features.map((feature) => (
            <HStack as="li" key={feature.id} align="flex-start" gap={3}>
              <Box
                as={feature.included ? Check : X}
                mt="0.1em"
                color={feature.included ? 'green.500' : 'fg.muted'}
                flexShrink={0}
                aria-hidden="true"
              />
              <Text
                fontSize="sm"
                opacity={feature.included ? 1 : 0.75}
                textDecoration={feature.included ? 'none' : 'line-through'}
              >
                {feature.label}
                {feature.value ? ` — ${feature.value}` : ''}
              </Text>
            </HStack>
          ))}
        </Stack>

        <Button
          w="full"
          size="sm"
          px={6}
          minH={10}
          borderRadius="full"
          variant={selected ? 'solid' : 'outline'}
          onClick={(e) => {
            e.stopPropagation()
            handleSelect()
          }}
        >
          {plan.cta}
        </Button>
      </Stack>
    </Box>
  )
}

export default PlanCard
