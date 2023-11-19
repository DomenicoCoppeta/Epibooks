import { useEffect } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { Bearer } from './Bearer';


export default function SingleComment({comment, commentCount, setCommentCount}){
    const deleteComment = async (asin) => {
        try {
          let response = await fetch(
            'https://striveschool-api.herokuapp.com/api/comments/' + asin,
            {
              method: 'DELETE',
              headers: {
                Authorization: Bearer,
              },
            }
          )
          if (response.ok) {
            alert('Review successfully deleted')
          } else {
            throw new Error('Something went wrong')
          }
        } catch (error) {
          alert(error)
        }

      }

    


      
    return (
      <ListGroup.Item className='d-flex justify-content-between align-items-center'>
        <div>{comment.comment}</div>
        {/* <div>Rating:{comment.rate}</div> */}
        <Button
          variant="danger"
          className="ms-2"
          onClick={() => deleteComment(comment._id)}>
          <i className="bi bi-x-lg"></i>
        </Button>
      </ListGroup.Item>
    )

}