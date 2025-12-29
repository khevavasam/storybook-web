'use client'

import React, { useEffect, useState } from 'react'
import NextLink from 'next/link'
import { useTranslations } from 'next-intl'
import { Button, HStack, Link as ChakraLink } from '@chakra-ui/react'
import type { Session } from '@supabase/supabase-js'

import { supabase } from '@/lib/supabase/client'
import { signInWithGoogle } from '@/lib/auth/google'

type Variant = 'header' | 'hero'

type Props = {
  variant: Variant
  profileHref?: string
}

export const AuthButtons: React.FC<Props> = ({
  variant,
  profileHref = '/profile',
}) => {
  const t = useTranslations('Landing.AuthButtons')

  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let alive = true

    supabase.auth.getSession().then(({ data }) => {
      if (!alive) return
      setSession(data.session)
      setLoading(false)
    })

    const { data: sub } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession)
    })

    return () => {
      alive = false
      sub.subscription.unsubscribe()
    }
  }, [])

  const onLogin = async () => {
    await signInWithGoogle()
  }

  const onLogout = async () => {
    await supabase.auth.signOut()
  }

  if (loading) return null

  const isAuthed = !!session

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
          <Button variant="outline" onClick={onLogin} {...outlineProps}>
            {t('login')}
          </Button>

          <Button variant="solid" onClick={onLogin} {...solidProps}>
            {t('startReading')}
          </Button>
        </HStack>
      )
    }

    return (
      <Button variant="solid" onClick={onLogin} {...solidProps}>
        {t('startReading')}
      </Button>
    )
  }

  return (
    <HStack gap={2}>
      <ChakraLink as={NextLink} href={profileHref} _hover={{ textDecoration: 'none' }}>
        <Button variant="outline" {...outlineProps}>
          {t('profile')}
        </Button>
      </ChakraLink>

      <Button variant="solid" onClick={onLogout} {...solidProps}>
        {t('logout')}
      </Button>
    </HStack>
  )
}
