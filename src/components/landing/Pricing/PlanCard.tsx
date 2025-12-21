'use client'

import React from 'react'
import {
    Box,
    Badge,
    Button,
    Heading,
    HStack,
    Stack,
    Text,
} from '@chakra-ui/react'

export interface PlanFeature {
    id: string
    label: string
    value?: string
}

export interface Plan {
    id: string
    name: string
    price: {
        amount: string
        period: string
    }
    description?: string
    badges?: string[]
    features: PlanFeature[]
    cta: string
    highlighted?: boolean
}

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
            borderRadius="xl"
            p={6}
            cursor={onSelect ? 'pointer' : 'default'}
            transition="all 0.2s ease"
            bg={selected ? 'bg.subtle' : 'transparent'}
            borderColor={selected ? 'border.emphasized' : 'border.default'}
            _hover={{
                transform: onSelect ? 'translateY(-2px)' : undefined,
                shadow: onSelect ? 'md' : undefined,
            }}
            onClick={handleSelect}
        >
            <Stack gap={6}>
                {/* Badges */}
                {plan.badges && plan.badges.length > 0 && (
                    <HStack gap={2} flexWrap="wrap">
                        {plan.badges.map((badge) => (
                            <Badge
                                key={badge}
                                size="sm"
                                borderRadius="full"
                                colorScheme="purple"
                            >
                                {badge}
                            </Badge>
                        ))}
                    </HStack>
                )}

                {/* Header */}
                <Stack gap={2}>
                    <Heading as="h3" size="md">
                        {plan.name}
                    </Heading>

                    <HStack align="baseline" gap={2}>
                        <Text fontSize="3xl" fontWeight="bold">
                            {plan.price.amount}
                        </Text>
                        <Text color="fg.muted">{plan.price.period}</Text>
                    </HStack>

                    {plan.description && (
                        <Text color="fg.muted" fontSize="sm">
                            {plan.description}
                        </Text>
                    )}
                </Stack>

                {/* Features */}
                <Stack as="ul" gap={2} ps={4}>
                    {plan.features.map((feature) => (
                        <Text as="li" key={feature.id} fontSize="sm">
                            {feature.label}
                            {feature.value ? ` — ${feature.value}` : ''}
                        </Text>
                    ))}
                </Stack>

                {/* CTA */}
                <Button
                    mt={2}
                    variant={selected || plan.highlighted ? 'solid' : 'outline'}
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
