import { render, screen } from '@redwoodjs/testing/web'

import Comment from './Comment'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

const comment = {
  name: 'Guy Incognito',
  body: 'My first comment',
  createdAt: '2020-01-01T12:34:56Z',
}

describe('Comment', () => {
  it('renders successfully', () => {
    render(<Comment comment={comment} />)

    expect(screen.getByText(comment.name)).toBeInTheDocument()
    expect(screen.getByText(comment.body)).toBeInTheDocument()
    const dateExpect = screen.getByText('1 January 2020')
    expect(dateExpect).toBeInTheDocument()
    expect(dateExpect.nodeName).toEqual('TIME')
    expect(dateExpect).toHaveAttribute('datetime', comment.createdAt)
  })
})
