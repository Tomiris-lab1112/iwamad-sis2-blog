import { Link } from 'react-router'
import type { Post } from '../data/posts'
import LikeButton from './LikeButton'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="card">
      <p className="meta">{post.date}</p>
      <h2>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h2>
      <p>{post.excerpt}</p>
      <LikeButton post={post} />
    </article>
  )
}
