import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

// "Signed in" is just one boolean in React state. No server, no password.
interface AuthValue {
  signedIn: boolean
  signIn: () => void
  signOut: () => void
}

const AuthContext = createContext<AuthValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState(false)

  const value: AuthValue = {
    signedIn,
    signIn: () => setSignedIn(true),
    signOut: () => setSignedIn(false),
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthValue {
  const value = useContext(AuthContext)
  if (!value) throw new Error('useAuth must be used inside AuthProvider')
  return value
}
