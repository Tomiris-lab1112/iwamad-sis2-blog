import { Link } from 'react-router'
import PostCard from '../components/PostCard'
import { posts } from '../data/posts'

export default function Home() {
  const latest = posts.slice(0, 3)

  return (
    <>
      <h1>Welcome to my blog</h1>
      <p className="lead">
        I am Tomiris, an IT Management student. Here I write about what I learn while building
        web applications.
      </p>

      <h2>Latest posts</h2>
      <div className="grid">
        {latest.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <p>
        <Link to="/posts">See all posts →</Link>
      </p>
    </>
  )
}
