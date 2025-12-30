'use client'

import React from 'react'
import type { Session } from '@supabase/supabase-js'
import {
  Button,
  Card,
  Container,
  Grid,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  Avatar,
} from '@chakra-ui/react'

import { LogoutButton } from '@/components/auth'

type Props = {
  session: Session | null
}

function formatProvider(provider: string | undefined) {
  const p = (provider || 'google').trim()
  if (!p) return 'Google'
  if (p.toLowerCase() === 'google') return 'Google'
  return p.charAt(0).toUpperCase() + p.slice(1)
}

type SectionCardProps = {
  title: string
  children: React.ReactNode
}

function SectionCard({ title, children }: SectionCardProps) {
  return (
    <Card.Root variant="outline">
      <Card.Body>
        <Stack gap={3}>
          <Heading size="md">{title}</Heading>
          {children}
        </Stack>
      </Card.Body>
    </Card.Root>
  )
}

export const ProfilePage: React.FC<Props> = ({ session }) => {
  const user = session?.user

  const name =
    user?.user_metadata?.full_name || user?.user_metadata?.name || 'User'
  const avatarUrl = user?.user_metadata?.avatar_url || user?.user_metadata?.picture
  const email = user?.email || ''
  const provider = formatProvider(user?.app_metadata?.provider)

  return (
    <Container maxW="6xl" px={{ base: 4, md: 6 }} py={{ base: 8, md: 10 }}>
      <Stack gap={6}>
        <Card.Root variant="outline">
          <Card.Body>
            <Grid
              templateColumns={{ base: '1fr', md: '1fr auto' }}
              gap={4}
              alignItems="center"
            >
              <HStack gap={4}>
                <Avatar.Root size="lg">
                  {avatarUrl ? <Avatar.Image src={avatarUrl} alt={name} /> : null}
                  <Avatar.Fallback name={name} />
                </Avatar.Root>
                <Stack gap={1}>
                  <Heading size="lg">{name}</Heading>
                  <Text opacity={0.8}>{email}</Text>
                  <HStack gap={2}>
                    <Text fontSize="sm" opacity={0.7}>
                      Provider:
                    </Text>
                    <Tag.Root size="sm" variant="subtle">
                      <Tag.Label>{provider}</Tag.Label>
                    </Tag.Root>
                  </HStack>
                </Stack>
              </HStack>

              <LogoutButton variant="outline">Logout</LogoutButton>
            </Grid>
          </Card.Body>
        </Card.Root>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          <SectionCard title="My library">
            <Text opacity={0.8}>No stories yet</Text>
            <Button alignSelf="flex-start">Start reading</Button>
          </SectionCard>

          <Stack gap={6}>
            <SectionCard title="Account">
              <Text opacity={0.8}>Coming soon</Text>
            </SectionCard>

            <SectionCard title="Subscription">
              <Text opacity={0.8}>Coming soon</Text>
              <Button alignSelf="flex-start">Upgrade</Button>
            </SectionCard>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Container>
  )
}
