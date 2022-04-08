import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

import CreateCommentModal from '../CreateCommentModal'
import { getComments } from '../../store/comments';
import './index.css';

const Comments = () => {
  const { imageId } = useParams();
  // const comment = useSelector(state => state.comments[imageId])
  let comments = useSelector(state => {
    return Object.values(state.comments)
  });

  comments = comments.filter(comment => comment.imageId === +imageId)

  return (
    <div>
    <CreateCommentModal  />
      {comments.map(comment =>
        <div className='comment-div' key={comment.id}>
          <i className="fas fa-user-circle" />
          <h3>
            {comment.content}
          </h3>
          <button>update</button>
        </div>
      )}
    </div>
  )
}

export default Comments;
