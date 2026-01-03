'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { ProfilePage } from '@/components/profile'
import { useSession } from '@/lib/auth/useSession'

export default function ProfileRoutePage() {
  const router = useRouter()
  const { loading, session, isAuthed } = useSession()

  useEffect(() => {
    if (!loading && !isAuthed) {
      router.replace('/')
    }
  }, [isAuthed, loading, router])

  if (loading) return null
  if (!isAuthed) return null

  return <ProfilePage session={session} />
}
