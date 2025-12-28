'use client'

import { useEffect, useState } from 'react'
import { signInWithGoogle } from '@/lib/auth/google'
import { supabase } from '@/lib/supabase/client'
import type { Session } from '@supabase/supabase-js'

export function GoogleAuthTestButton() {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setLoading(false)
    })

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session)
      }
    )

    return () => {
      subscription.subscription.unsubscribe()
    }
  }, [])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  if (loading) {
    return <div style={{ padding: 40, textAlign: 'center' }}>Checking auth…</div>
  }

  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      {session ? (
        <>
          <p style={{ marginBottom: 12 }}>
            Signed in as <b>{session.user.email}</b>
          </p>

          <button
            onClick={handleSignOut}
            style={{
              padding: '12px 20px',
              fontSize: 16,
              cursor: 'pointer',
            }}
          >
            Sign out
          </button>
        </>
      ) : (
        <button
          onClick={signInWithGoogle}
          style={{
            padding: '12px 20px',
            fontSize: 16,
            cursor: 'pointer',
          }}
        >
          Sign in with Google (test)
        </button>
      )}
    </div>
  )
}
