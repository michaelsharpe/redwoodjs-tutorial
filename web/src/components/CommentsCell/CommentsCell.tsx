import type { CommentsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Comment from '../Comment/Comment'

export const QUERY = gql`
  query CommentsQuery {
    comments {
      id
      name
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="text-center text-gray-500">
      No comments yet bro. Chill out.
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ comments }: CellSuccessProps<CommentsQuery>) => {
  return (
    <div className="space-y-8">
      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />
      })}
    </div>
  )
}
