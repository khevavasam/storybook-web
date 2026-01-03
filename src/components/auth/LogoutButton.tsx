'use client'

import React from 'react'
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

import { supabase } from '@/lib/supabase/client'

type Props = React.ComponentProps<typeof Button> & {
  redirectTo?: string
}

export const LogoutButton: React.FC<Props> = ({
  onClick,
  redirectTo = '/',
  ...props
}) => {
  const router = useRouter()

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    onClick?.(e)
    if (e.defaultPrevented) return
    await supabase.auth.signOut()
    router.replace(redirectTo)
  }

  return <Button {...props} onClick={handleClick} />
}
