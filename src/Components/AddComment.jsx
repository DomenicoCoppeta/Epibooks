import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Bearer } from './Bearer';
import { toast } from 'react-toastify';



export default function AddComment ({asin, commentCount, setCommentCount, updateComments}) {

    
    const [comment, setComment] = useState({
        comment: '',
        rate: '1',
        elementId: null,
    });

    

    useEffect(() => {
        setComment((c) => ({
            ...c,
            elementId: asin,
        }))
    }, [asin, commentCount])

    
    
    const postComment = async (e) => {
        e.preventDefault()
        try {
            let response = await fetch (
              'https://striveschool-api.herokuapp.com/api/comments/',
                {
                    method: 'POST',
                    headers: {
                      'Content-type': 'application/json',
                      Authorization: Bearer,
                    },
                    body: JSON.stringify({
                      comment: comment.comment,
                      rate: comment.rate,
                      elementId: comment.elementId,
                    }
                      ),
                }
            )
            if (response.ok) {
                toast.success ('Comment posted successfully');
                setCommentCount((prevCount) => prevCount + 1);
                setComment(() => ({
                  comment: '',
                  rate: '1',
                }));
                updateComments(comment)
                
        } else {
            throw new Error('Something went wrong')
        }
    } catch (error) {
        alert(error)
    }}

    
    
    

    
    return (
        <div className="my-3">
          <Form onSubmit={postComment} className='d-flex align-items-end justify-content-between'>
            <Form.Group className="mb-2 me-3 flex-grow-1" controlId="review">
              <Form.Label>Leave A Comment</Form.Label>
              <Form.Control 
                className='py-3'
                type="text"
                placeholder="Write a Comment"
                value={comment.comment}
                onChange={(e) =>
                  setComment({
                    ...comment,
                    comment: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="rating">
              <Form.Label>Rate</Form.Label>
              <Form.Control
                className='text-center py-3'
                as="select"
                value={comment.rate}
                onChange={(e) =>
                  setComment({
                    ...comment,
                    rate: e.target.value,
                  })
                }
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Button className='m-3 ' variant="primary" type="submit" >
            <i className="bi bi-plus-circle"></i>
            </Button>
          </Form>
        </div>
      )


}