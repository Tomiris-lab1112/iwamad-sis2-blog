import { createContext, useContext, useReducer } from 'react'
import type { ReactNode } from 'react'

// { [postId]: true/false } - every post keeps its own value
type LikedMap = Record<number, boolean>
type Action = { type: 'toggle'; id: number }

function reducer(state: LikedMap, action: Action): LikedMap {
  switch (action.type) {
    case 'toggle':
      return { ...state, [action.id]: !state[action.id] }
    default:
      return state
  }
}

interface LikesValue {
  isLiked: (id: number) => boolean
  toggleLike: (id: number) => void
}

const LikesContext = createContext<LikesValue | null>(null)

export function LikesProvider({ children }: { children: ReactNode }) {
  const [liked, dispatch] = useReducer(reducer, {})

  const value: LikesValue = {
    isLiked: (id) => Boolean(liked[id]),
    toggleLike: (id) => dispatch({ type: 'toggle', id }),
  }

  return <LikesContext.Provider value={value}>{children}</LikesContext.Provider>
}

export function useLikes(): LikesValue {
  const value = useContext(LikesContext)
  if (!value) throw new Error('useLikes must be used inside LikesProvider')
  return value
}
