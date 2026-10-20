import PostCard from '../components/PostCard'
import { posts } from '../data/posts'

export default function Posts() {
  return (
    <>
      <h1>Posts</h1>
      <div className="grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}
