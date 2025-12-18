'use client'

import { Box, Button, Container, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import styles from './Pricing.module.css'

export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      features: ['Create stories', 'English only', 'Share links'],
      cta: 'Start free',
    },
    {
      name: 'Pro',
      price: '$9/mo',
      features: ['Multiple languages', 'Library', 'PDF export'],
      cta: 'Go Pro',
    },
    {
      name: 'Family',
      price: '$19/mo',
      features: ['Up to 5 profiles', 'Sharing controls', 'Priority support'],
      cta: 'Choose Family',
    },
  ]

  return (
    <Box as="section" id="pricing" className={styles.root}>
      <Container maxW="6xl" className={styles.inner} py={{ base: 10, md: 16 }}>
        <Stack spacing={4} mb={10}>
          <Heading size="xl">Simple pricing</Heading>
          <Text color="fg.muted">Choose a plan that fits your family.</Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          {plans.map((plan) => (
            <Box key={plan.name} borderWidth="1px" borderRadius="xl" p={6}>
              <Stack spacing={4}>
                <Stack spacing={1}>
                  <Heading size="md">{plan.name}</Heading>
                  <Text fontSize="2xl" fontWeight="semibold">
                    {plan.price}
                  </Text>
                </Stack>

                <Stack as="ul" spacing={2} ps={4}>
                  {plan.features.map((feature) => (
                    <Text as="li" key={feature} color="fg.muted">
                      {feature}
                    </Text>
                  ))}
                </Stack>

                <Button as="a" href="#signin" variant="outline">
                  {plan.cta}
                </Button>
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}


