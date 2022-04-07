import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

import { getComments } from '../../store/comments';
import './index.css';

const Comments = ({commentId}) => {
  const comment = useSelector(state => state.comments[commentId])
  return (
    <div className='comment-div'>
        <div className='comment-div' key={comment.id}>
          <p>{comment?.content}</p>
        </div>
    </div>
  )
}

export default Comments;
