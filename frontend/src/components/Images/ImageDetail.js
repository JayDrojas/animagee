import { useDispatch, useSelector } from 'react-redux';
import { deleteImage } from '../../store/images';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getAllImages } from '../../store/images';
import UpdateImageModal from '../UpdateImageModal/index';
import Comments from '../Comments';
import './index.css';

const ImageDetail = () => {
  const history = useHistory();
  const { imageId } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const image = useSelector(state => state.image[imageId]);

  useEffect(() => {
    dispatch(getAllImages());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteImage(id));
    history.push('/')
  };

  return (
    <>
      <div className='image-detail'>
        <div className='image-container'>
          <h2 className='image-title'>{image?.content}</h2>
          <img className="individual-images" src={image?.imageUrl} alt={image?.content} />
          {sessionUser && sessionUser.id === image?.userId &&
            <div className='button-row'>
              <div className='bttn-in-row'>
                <UpdateImageModal user={{ ...sessionUser }} image={{ ...image }} />
              </div>

              <div className='bttn-in-row'>
                <button onClick={() => handleDelete(image?.id)} className='submit-bttn delete'>
                  Delete
                </ button>
              </div>
            </div>
          }
        </div>
      </div>
      <div className='image-comment-outer-div'>
        <Comments />
      </div>
    </>
  );
};
export default ImageDetail;
