import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'

export default function CommentList ({ commentsToShow, rate }) {
  return (
  <ListGroup className="mt-2">
    {commentsToShow.map((comment) => (
      <SingleComment comment={comment} rate={rate} key={comment._id}/>
    ))}
  </ListGroup>
  )
}


