'use client'

import { Button, Container, Heading, Stack, Text } from '@chakra-ui/react'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <Container as="section" maxW="6xl" className={styles.root}>
      <Stack className={styles.inner} py={{ base: 10, md: 16 }} spacing={6} maxW="3xl">
        <Heading size={{ base: '2xl', md: '3xl' }}>Multilingual stories for kids</Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }} color="fg.muted">
          Create one story, translate it with strict 1:1 meaning, and share it with family.
        </Text>

        <Stack direction={{ base: 'column', sm: 'row' }} spacing={3}>
          <Button as="a" href="#pricing" size="lg">
            View pricing
          </Button>
          <Button as="a" href="#signin" size="lg" variant="outline">
            Sign in
          </Button>
        </Stack>
      </Stack>
    </Container>
  )
}


