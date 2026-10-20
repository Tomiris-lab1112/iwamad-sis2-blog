import { NavLink, Outlet } from 'react-router'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/posts', label: 'Posts', end: false },
  { to: '/contact', label: 'Contact', end: false },
  { to: '/account', label: 'Account', end: false },
]

export default function Layout() {
  return (
    <div className="shell">
      <header className="site-header">
        <span className="brand">Tomiris’s Blog</span>
        <nav aria-label="Main">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        © 2026 Tomiris Oraz · Built with React, TypeScript and React Router
      </footer>
    </div>
  )
}
