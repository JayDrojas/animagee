import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

import CreateCommentModal from '../CreateCommentModal'
import UpdateCommentModal from '../UpdateCommentModal';
import DeleteCommentModal from '../DeleteCommentModal';
import { getComments } from '../../store/comments';
import './index.css';
import { useEffect } from 'react';

const Comments = () => {
  const dispatch = useDispatch();
  const { imageId } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  let comments = useSelector(state => {
    return Object.values(state.comments)
  });

  const backgroundImgs = ["https://wallpaperboat.com/wp-content/uploads/2020/10/20/57340/leaf-village-05.jpg", "https://www.wallpaperbetter.com/wallpaper/753/195/742/anime-branch-environment-river-bridge-720P-wallpaper.jpg", "https://images5.alphacoders.com/495/thumb-1920-495521.jpg"];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const imgIdx = getRandomInt(3);

  useEffect(() => {
    dispatch(getComments(imageId));
  }, [dispatch, imageId])

  comments = comments.filter(comment => comment.imageId === +imageId)

  return (
    <div className='comments-outer-div'
      style={{
        backgroundImage: `url(${backgroundImgs[imgIdx]})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className='create-comment-modal'>
        <CreateCommentModal />
      </div>
      {comments?.map(comment =>
        <div className='one-comment-div' key={comment?.id}>
          <div className='comment-div'>
            <div className='profile-logo'>
              <i className="fas fa-user-circle" />
              <p>{comment?.User?.username}</p>
            </div>
            <div id='comment-content'>
              <h3>
                {comment?.content}
              </h3>
            </div>
          </div>
          <div className='all-modals-bttns'>
            {sessionUser && sessionUser.id === comment?.userId && (
              <div className='action-bttns-comments'>
                <div className='action-btt-comment'>
                  <UpdateCommentModal comment={comment} />
                </div>
                <div className='action-btt-comment'>
                  <DeleteCommentModal comment={comment} />
                </div>
              </div>
            )
            }
          </div>
        </div>
      )}
    </div>
  )
}

export default Comments;
