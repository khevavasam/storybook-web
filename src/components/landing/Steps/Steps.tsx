'use client'

import { Box, Container, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import styles from './Steps.module.css'

export function Steps() {
  const steps = [
    {
      title: 'Create a story',
      description: 'Write a short story once and keep it in your library.',
    },
    {
      title: 'Translate 1:1',
      description: 'Add another language while keeping meaning aligned.',
    },
    {
      title: 'Share or export',
      description: 'Send a link to family or export a PDF for bedtime.',
    },
  ]

  return (
    <Box as="section" className={styles.root}>
      <Container maxW="6xl" className={styles.inner} py={{ base: 10, md: 16 }}>
        <Stack spacing={8}>
          <Heading size="lg">How it works</Heading>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
            {steps.map((step) => (
              <Box key={step.title} borderWidth="1px" borderRadius="lg" p={6}>
                <Stack spacing={2}>
                  <Heading size="md">{step.title}</Heading>
                  <Text color="fg.muted">{step.description}</Text>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  )
}


