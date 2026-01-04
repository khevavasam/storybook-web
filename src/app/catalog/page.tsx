'use client'

import NextLink from 'next/link'
import { useTranslations } from 'next-intl'
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Link as ChakraLink,
  Stack,
} from '@chakra-ui/react'

import { CatalogGrid } from '@/components/catalog'
import { mockStories } from '@/components/landing/Catalog/mockStories'

export default function CatalogRoutePage() {
  const t = useTranslations('CatalogPage')

  return (
    <Box as="main" py={{ base: 8, md: 12 }}>
      <Container maxW="6xl" px={{ base: 4, md: 6 }}>
        <Stack gap={{ base: 6, md: 8 }}>
          <HStack justify="space-between" align="center" gap={4}>
            <Heading as="h1" size={{ base: 'xl', md: '2xl' }} color="primary.default">
              {t('title')}
            </Heading>

            <ChakraLink as={NextLink} href="/" _hover={{ textDecoration: 'none' }}>
              <Button variant="outline" borderRadius="full" px={6}>
                {t('actions.backHome')}
              </Button>
            </ChakraLink>
          </HStack>

          <CatalogGrid stories={mockStories} />
        </Stack>
      </Container>
    </Box>
  )
}
