import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'

export default function CommentList ({ commentsToShow, rate, commentCount, setCommentCount }) {
  return (
  <ListGroup className="mt-2">
    {commentsToShow.map((comment) => (
      <SingleComment comment={comment} commentCount={commentCount} setCommentCount={setCommentCount} rate={rate} key={comment._id}/>
    ))}
  </ListGroup>
  )
}


