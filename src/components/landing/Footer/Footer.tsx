'use client'

import { Box, Container, Text } from '@chakra-ui/react'

export function Footer() {
  return (
    <Box
      as="footer"
      py={10}
      bg="bg.subtle"
      borderTop="1px solid"
      borderColor="border.muted"
    >
      <Container maxW="6xl" px={{ base: 4, md: 6 }} mx="auto">
        <Text
          fontSize="sm"
          color="fg.muted"
          textAlign="center"
        >
          © {new Date().getFullYear()} Storybook. All rights reserved.
        </Text>
      </Container>
    </Box>
  )
}
