import { useDispatch, useSelector } from 'react-redux';
import { deleteImage } from '../../store/images';
import UpdateImageModal from '../UpdateImageModal/index';
import './index.css';

const ImageDetail = ({ id, imageUrl, content, userId }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const handleDelete = (id) => {
    dispatch(deleteImage(id));
  };
  
  return (
    <div className='image-detail'>
      <img src={imageUrl} alt={content} />
      <span className='product-title'>{content}</span>
      { sessionUser && sessionUser.id === userId &&
        <div className='button-row'>
        <button onClick={() => handleDelete(id)} className='delete-button'>
          Delete
        </button>
        <UpdateImageModal user={{...sessionUser}} image={{id, imageUrl, content, userId}}/>
      </div>}
    </div>
  );
};
export default ImageDetail;