'use client'

import React from 'react'
import { Button } from '@chakra-ui/react'

import { signInWithGoogle } from '@/lib/auth/google'

type Props = React.ComponentProps<typeof Button>

export const LoginButton: React.FC<Props> = ({ onClick, ...props }) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    onClick?.(e)
    if (e.defaultPrevented) return
    await signInWithGoogle()
  }

  return <Button {...props} onClick={handleClick} />
}
