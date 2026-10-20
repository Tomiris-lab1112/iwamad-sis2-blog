import { useLocation, useNavigate } from 'react-router'
import { useAuth } from '../state/auth'

export default function SignIn() {
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as { from?: string } | null)?.from ?? '/account'

  function handleSignIn() {
    signIn()
    navigate(from, { replace: true })
  }

  return (
    <>
      <h1>Sign in</h1>
      <p>The account page is protected. Sign in to open it.</p>
      <button type="button" className="btn" onClick={handleSignIn}>
        Sign in
      </button>
    </>
  )
}
