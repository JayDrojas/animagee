import { useDispatch, useSelector } from 'react-redux';
import { deleteImage } from '../../store/images';
import { Modal } from '../../context/Modal';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getOneImage } from '../../store/images';
import UpdateImageModal from '../UpdateImageModal/index';
import './index.css';

const ImageDetail = () => {
  const history = useHistory();
  const { imageId } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [showModal, setShowModal] = useState(false);
  const image = useSelector(state => state.image[imageId]);

  // useEffect(() => {
  //   dispatch(getOnePokemon(pokemonId));
  //   setShowEditPokeForm(false);
  //   setEditItemId(null);
  // }, [dispatch, pokemonId]);

  const handleDelete = (id) => {
    dispatch(deleteImage(id));
    history.push('/')
  };

  return (
    <div className='image-detail'>
      <img src={image?.imageUrl} alt={image?.content} />
      <span className='product-title'>{image?.content}</span>
      {sessionUser && sessionUser.id === image?.userId &&
        <div className='button-row'>
          <button onClick={() => handleDelete(image?.id)} className='delete-button'>
            Delete
          </button>
          <UpdateImageModal user={{ ...sessionUser }} image={{ ...image }} />
        </div>}
    </div>
  );
};
export default ImageDetail;