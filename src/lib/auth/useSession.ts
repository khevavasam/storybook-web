'use client'

import { useEffect, useState } from 'react'
import type { Session } from '@supabase/supabase-js'

import { supabase } from '@/lib/supabase/client'

type UseSessionResult = {
  session: Session | null
  loading: boolean
  isAuthed: boolean
}

export function useSession(): UseSessionResult {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    const init = async () => {
      try {
        const { data } = await supabase.auth.getSession()
        if (!mounted) return
        setSession(data.session)
      } finally {
        if (!mounted) return
        setLoading(false)
      }
    }

    init()

    const { data: sub } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      if (!mounted) return
      setSession(nextSession)
      setLoading(false)
    })

    return () => {
      mounted = false
      sub.subscription.unsubscribe()
    }
  }, [])

  const isAuthed = !!session

  return { session, loading, isAuthed }
}
