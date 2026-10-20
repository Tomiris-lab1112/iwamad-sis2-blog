import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import RequireAuth from './components/RequireAuth'
import Home from './pages/Home'
import Posts from './pages/Posts'
import PostPage from './pages/PostPage'
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'
import Account from './pages/Account'
import NotFound from './pages/NotFound'
import { AuthProvider } from './state/auth'
import { LikesProvider } from './state/likes'

export default function App() {
  return (
    <AuthProvider>
      <LikesProvider>
        <Routes>
          {/* One layout route: header and footer stay while pages change */}
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="posts" element={<Posts />} />
            <Route path="posts/:id" element={<PostPage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="signin" element={<SignIn />} />

            {/* Protected layout route: checks sign-in before rendering the Outlet */}
            <Route element={<RequireAuth />}>
              <Route path="account" element={<Account />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </LikesProvider>
    </AuthProvider>
  )
}
