'use client'

import React from 'react'
import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'

export const Reviews: React.FC = () => {
  return (
    <Box as="section" id="reviews" py={{ base: 16, md: 24 }} scrollMarginTop="88px">
      <Container maxW="6xl" px={{ base: 4, md: 6 }} mx="auto">
        <Stack gap={3} textAlign="center" maxW="xl" mx="auto">
          <Heading as="h2" size={{ base: '2xl', md: '3xl' }} color="primary.default">
            Reviews
          </Heading>
          <Text color="fg.muted">Coming soon.</Text>
        </Stack>
      </Container>
    </Box>
  )
}


