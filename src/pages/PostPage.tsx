import { Link, useParams } from 'react-router'
import LikeButton from '../components/LikeButton'
import { posts } from '../data/posts'

export default function PostPage() {
  // useParams gives a string (or undefined), so convert it before comparing
  const { id } = useParams<{ id: string }>()
  const post = posts.find((p) => p.id === Number(id))

  if (!post) {
    return (
      <>
        <h1>No such post</h1>
        <p>There is no post with the id “{id}”.</p>
        <Link to="/posts">← Back to all posts</Link>
      </>
    )
  }

  return (
    <article>
      <p className="meta">{post.date}</p>
      <h1>{post.title}</h1>
      {post.body.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <LikeButton post={post} />
      <p>
        <Link to="/posts">← All posts</Link>
      </p>
    </article>
  )
}
