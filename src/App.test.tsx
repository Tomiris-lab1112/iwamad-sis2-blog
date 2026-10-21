import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import App from './App'
import { posts } from './data/posts'

// Start the app at any URL, without a browser
function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

describe('blog', () => {
  it('marks only the current page in the navigation', () => {
    renderAt('/posts')
    expect(screen.getByRole('link', { name: 'Posts' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: 'Home' })).not.toHaveAttribute('aria-current')
  })

  it('shows one card per post on the posts page', () => {
    renderAt('/posts')
    expect(screen.getAllByRole('article')).toHaveLength(posts.length)
  })

  it('like button changes only its own post', async () => {
    const user = userEvent.setup()
    renderAt('/posts')

    const buttons = screen.getAllByRole('button', { name: /like/i })
    expect(buttons[0]).toHaveAttribute('aria-pressed', 'false')

    await user.click(buttons[0])

    expect(buttons[0]).toHaveAttribute('aria-pressed', 'true')
    expect(buttons[0]).toHaveTextContent(String(posts[0].likes + 1))
    expect(buttons[1]).toHaveAttribute('aria-pressed', 'false')
  })

  it('protects the account page: sign-in first, then the page, then protected again', async () => {
    const user = userEvent.setup()
    renderAt('/account')

    expect(screen.getByRole('heading', { name: 'Sign in' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Sign in' }))
    expect(screen.getByRole('heading', { name: 'My account' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Sign out' }))
    expect(screen.getByRole('heading', { name: 'Sign in' })).toBeInTheDocument()
  })

  it('shows the custom 404 page inside the layout', () => {
    renderAt('/banana')
    expect(screen.getByRole('heading', { name: /page not found/i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
  })

  it('shows a clear message for a post that does not exist', () => {
    renderAt('/posts/999')
    expect(screen.getByRole('heading', { name: /no such post/i })).toBeInTheDocument()
  })
})