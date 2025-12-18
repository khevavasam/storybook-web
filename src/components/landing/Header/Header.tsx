'use client'

import { Box, Button, Container, Flex, Heading, Link, Stack } from '@chakra-ui/react'
import styles from './Header.module.css'

export function Header() {
  return (
    <Box as="header" className={styles.root} py={{ base: 4, md: 6 }}>
      <Container maxW="6xl" className={styles.inner}>
        <Flex align="center" justify="space-between" gap={6}>
          <Link href="/" _hover={{ textDecoration: 'none' }}>
            <Heading size="md">Storybook</Heading>
          </Link>

          <Flex align="center" gap={4}>
            <Stack direction="row" spacing={4} align="center">
              <Link href="#pricing">Pricing</Link>
            </Stack>

            <Button as="a" href="#signin" variant="outline">
              Sign in
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}


