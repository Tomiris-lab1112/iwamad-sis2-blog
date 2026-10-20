import type { Post } from '../data/posts'
import { useLikes } from '../state/likes'

interface LikeButtonProps {
  post: Post
}

export default function LikeButton({ post }: LikeButtonProps) {
  const { isLiked, toggleLike } = useLikes()
  const liked = isLiked(post.id)
  const count = post.likes + (liked ? 1 : 0)

  return (
    <button
      type="button"
      className={liked ? 'like liked' : 'like'}
      aria-pressed={liked}
      onClick={() => toggleLike(post.id)}
    >
      {liked ? '♥' : '♡'} Like · {count}
    </button>
  )
}
