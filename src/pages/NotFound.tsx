import { Link, useLocation } from 'react-router'

export default function NotFound() {
  const { pathname } = useLocation()

  return (
    <>
      <h1>404 – Page not found</h1>
      <p>
        The page <code>{pathname}</code> does not exist.
      </p>
      <Link to="/">Go to the home page</Link>
    </>
  )
}
