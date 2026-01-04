'use client'

import React from 'react'
import type { Session } from '@supabase/supabase-js'
import { useTranslations } from 'next-intl'
import NextLink from 'next/link'
import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  Heading,
  HStack,
  Link as ChakraLink,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react'

import { LogoutButton } from '@/components/auth'
import { CatalogGrid } from '@/components/catalog'
import { mockStories } from '@/components/landing/Catalog/mockStories'
import styles from './ProfilePage.module.css'

type Props = {
  session: Session | null
}

function prettyProvider(provider?: string) {
  const p = (provider ?? 'google').trim().toLowerCase()
  if (!p || p === 'google') return 'Google'
  return p.charAt(0).toUpperCase() + p.slice(1)
}

export function ProfilePage({ session }: Props) {
  const t = useTranslations('Profile')
  const tLibrary = useTranslations('Profile.Library')
  const user = session?.user

  const name =
    user?.user_metadata?.full_name ||
    user?.user_metadata?.name ||
    t('fallback.name')

  const email = user?.email || t('fallback.email')
  const avatarUrl = user?.user_metadata?.avatar_url || user?.user_metadata?.picture
  const provider = prettyProvider(user?.app_metadata?.provider)

  const actionBtnProps = {
    size: 'sm' as const,
    px: 6,
    borderRadius: 'full' as const,
  }

  const libraryPreviewStories = mockStories.slice(0, 3)

  return (
    <Box
      minH="100vh"
      w="full"
      display="flex"
      justifyContent="center"
      px={{ base: 4, md: 8 }}
      py={{ base: 8, md: 12 }}
    >
      <Box w="full" maxW="6xl">
        <Stack gap={{ base: 4, md: 6 }} w="full">
          <Card.Root variant="outline" className={`${styles.card} ${styles.headerCard}`}>
            <Card.Body p={{ base: 4, md: 6 }}>
              <Grid
                templateColumns={{ base: '1fr', md: '1fr auto' }}
                gap={4}
                alignItems="center"
              >
                <HStack gap={4} minW={0}>
                  <Avatar.Root size="lg" className={styles.avatar}>
                    {avatarUrl ? <Avatar.Image src={avatarUrl} alt={name} /> : null}
                    <Avatar.Fallback name={name} />
                  </Avatar.Root>

                  <Stack gap={1} minW={0}>
                    <Heading size="lg" lineClamp={1}>
                      {name}
                    </Heading>

                    <Text opacity={0.85} lineClamp={1}>
                      {email}
                    </Text>

                    <HStack gap={2}>
                      <Text fontSize="sm" opacity={0.7}>
                        {t('meta.providerLabel')}
                      </Text>

                      <Tag.Root size="md" variant="subtle" px={3} py={1} borderRadius="full" borderWidth="1px"                      >
                        <Tag.Label fontSize="sm">{provider}</Tag.Label>
                      </Tag.Root>
                    </HStack>
                  </Stack>
                </HStack>

                <LogoutButton variant="solid" {...actionBtnProps}>
                  {t('actions.logout')}
                </LogoutButton>
              </Grid>
            </Card.Body>
          </Card.Root>

          <Grid
            w="full"
            templateColumns={{ base: '1fr', lg: '1.35fr 0.9fr' }}
            gap={{ base: 4, md: 6 }}
            alignItems={{ base: 'start', lg: 'stretch' }}
          >
            <Card.Root variant="outline" className={styles.card}>
              <Card.Body p={{ base: 4, md: 6 }} h={{ lg: 'full' }}>
                <Stack gap={4} h={{ lg: 'full' }} justify={{ lg: 'space-between' }}>
                  <Stack gap={2}>
                    <Heading size="md">{tLibrary('title')}</Heading>
                    <Text fontSize="sm" opacity={0.85}>
                      {tLibrary('subtitle')}
                    </Text>
                  </Stack>

                  {libraryPreviewStories.length > 0 ? (
                    <CatalogGrid stories={libraryPreviewStories} columns={{ base: 1, md: 3 }} gap={4} />
                  ) : (
                    <Text fontSize="sm" opacity={0.85}>
                      {tLibrary('empty')}
                    </Text>
                  )}

                  <HStack gap={3} align="center" justify="flex-start" flexWrap="wrap">
                    <ChakraLink as={NextLink} href="/catalog" _hover={{ textDecoration: 'none' }}>
                      <Button variant="solid" {...actionBtnProps}>
                        {tLibrary('actions.startReading')}
                      </Button>
                    </ChakraLink>

                    <ChakraLink as={NextLink} href="/catalog" _hover={{ textDecoration: 'none' }}>
                      <Button variant="outline" {...actionBtnProps}>
                        {tLibrary('actions.viewAll')}
                      </Button>
                    </ChakraLink>
                  </HStack>
                </Stack>
              </Card.Body>
            </Card.Root>

            <Grid
              w="full"
              templateRows={{ base: 'auto', lg: '1fr 1fr' }}
              gap={{ base: 4, md: 6 }}
            >
              <Card.Root variant="outline" className={styles.card}>
                <Card.Body p={{ base: 4, md: 6 }} h={{ lg: 'full' }}>
                  <Stack gap={2}>
                    <Heading size="sm">{t('sections.account.title')}</Heading>
                    <Text fontSize="sm" opacity={0.85}>
                      {t('common.comingSoon')}
                    </Text>
                  </Stack>
                </Card.Body>
              </Card.Root>

              <Card.Root variant="outline" className={styles.card}>
                <Card.Body p={{ base: 4, md: 6 }} h={{ lg: 'full' }}>
                  <Stack gap={4} h={{ lg: 'full' }} justify={{ lg: 'space-between' }}>
                    <Stack gap={2}>
                      <Heading size="sm">{t('sections.subscription.title')}</Heading>
                      <Text fontSize="sm" opacity={0.85}>
                        {t('common.comingSoon')}
                      </Text>
                    </Stack>

                    <Button variant="solid" alignSelf="flex-start" {...actionBtnProps}>
                      {t('actions.upgrade')}
                    </Button>
                  </Stack>
                </Card.Body>
              </Card.Root>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Box>
  )
}
