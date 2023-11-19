import { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import AddComment from './AddComment';
import CommentList from './CommentList';
import Error from './Error';
import { Bearer } from './Bearer';

export default function CommentArea({ asin }) {
    const [comments, setComments] = useState([])
    const [isError, setIsError] = useState(false)
    const [commentCount, setCommentCount] = useState(0);

    const updateComments = (newComment) => {
      setComments((prevComments)=>[...prevComments, newComment]);
    };
    


    useEffect(() => {
      const getComments = () => {
        fetch(
          'https://striveschool-api.herokuapp.com/api/comments/' + asin,
          {
            headers: {
              Authorization: Bearer,
            },
          }
        )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Network response was not ok');
          }
        })
        .then((comments) => {
          setComments(comments);
          setIsError(false);
        })
        .catch((error) => {
          console.error('Error during fetch operation:', error);
          setIsError(true);
        });
      };
    
      if (asin) {
        getComments();
      }
    }, [asin]);

    
    return (
      <Col className="text-center py-3 px-3">
      {isError && <Error />}
      <h4>Reviews</h4>
      <CommentList commentsToShow={comments} commentCount={commentCount} setCommentCount={setCommentCount}/>
      <AddComment commentCount={commentCount} setCommentCount={setCommentCount} asin={asin} updateComments={updateComments}/>
      </Col>
    )
  }
    

