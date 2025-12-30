'use client'

import React from 'react'
import NextLink from 'next/link'
import { useTranslations } from 'next-intl'
import { Button, HStack } from '@chakra-ui/react'

import { LoginButton, LogoutButton } from '@/components/auth'
import { useSession } from '@/lib/auth/useSession'

type Variant = 'header' | 'hero'

type Props = {
  variant: Variant
  profileHref?: string
}

const ProfileButton = Button as unknown as React.FC<
  React.ComponentProps<typeof Button> & { href: string }
>

export const AuthButtons: React.FC<Props> = ({
  variant,
  profileHref = '/profile',
}) => {
  const t = useTranslations('Landing.AuthButtons')

  const { loading, isAuthed } = useSession()

  if (loading) return null

  if (isAuthed && variant === 'hero') return null

  const solidProps =
    variant === 'header'
      ? { size: 'sm' as const, px: 6, minH: 10, borderRadius: 'full' as const }
      : { size: 'lg' as const, px: 8, minH: 12, borderRadius: 'full' as const }

  const outlineProps =
    variant === 'header'
      ? { size: 'sm' as const, px: 5, minH: 10, borderRadius: 'full' as const }
      : { size: 'lg' as const, px: 7, minH: 12, borderRadius: 'full' as const }

  if (!isAuthed) {
    if (variant === 'header') {
      return (
        <HStack gap={2}>
          <LoginButton variant="outline" {...outlineProps}>
            {t('login')}
          </LoginButton>

          <LoginButton variant="solid" {...solidProps}>
            {t('startReading')}
          </LoginButton>
        </HStack>
      )
    }

    return (
      <LoginButton variant="solid" {...solidProps}>
        {t('startReading')}
      </LoginButton>
    )
  }

  return (
    <HStack gap={2}>
      <ProfileButton as={NextLink} href={profileHref} variant="outline" {...outlineProps}>
        {t('profile')}
      </ProfileButton>

      <LogoutButton variant="solid" {...solidProps}>
        {t('logout')}
      </LogoutButton>
    </HStack>
  )
}
