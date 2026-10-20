import { Link } from 'react-router'
import { posts } from '../data/posts'
import { useAuth } from '../state/auth'
import { useLikes } from '../state/likes'

export default function Account() {
  const { signOut } = useAuth()
  const { isLiked } = useLikes()
  const likedPosts = posts.filter((post) => isLiked(post.id))

  return (
    <>
      <h1>My account</h1>
      <p>You are signed in.</p>

      <h2>Posts you liked</h2>
      {likedPosts.length === 0 ? (
        <p>You have not liked any posts yet.</p>
      ) : (
        <ul>
          {likedPosts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}

      <button type="button" className="btn" onClick={signOut}>
        Sign out
      </button>
    </>
  )
}
