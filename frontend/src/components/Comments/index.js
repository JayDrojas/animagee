import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

import CreateCommentModal from '../CreateCommentModal'
import UpdateCommentModal from '../UpdateCommentModal';
import { getComments } from '../../store/comments';
import './index.css';
import { useEffect } from 'react';

const Comments = () => {
  const dispatch = useDispatch();
  const { imageId } = useParams();
  let comments = useSelector(state => {
    return Object.values(state.comments)
  });

  useEffect(() => {
    dispatch(getComments(imageId));
  }, [dispatch, imageId])

  comments = comments.filter(comment => comment.imageId === +imageId)

  return (
    <div>
    <CreateCommentModal  />
      {comments.map(comment =>
        <div className='comment-div' key={comment?.id}>
          <i className="fas fa-user-circle" />
          <h3>
            {comment?.content}
          </h3>
          <UpdateCommentModal comment={comment}/>
        </div>
      )}
    </div>
  )
}

export default Comments;
