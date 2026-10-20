import { Navigate, Outlet, useLocation } from 'react-router'
import { useAuth } from '../state/auth'

export default function RequireAuth() {
  const { signedIn } = useAuth()
  const location = useLocation()

  if (!signedIn) {
    // Send the reader to the sign-in page and remember where they wanted to go
    return <Navigate to="/signin" replace state={{ from: location.pathname }} />
  }

  return <Outlet />
}
