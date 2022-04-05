import { useDispatch } from 'react-redux';

const ImageDetail = ({ id, imageUrl, content }) => {
//   const dispatch = useDispatch();

//   const handleDelete = (id) => {
//     dispatch(deleteProduct(id));
//   };
  return (
    <div className='image-detail'>
      <img src={imageUrl} alt={content} />
      <span className='product-title'>{content}</span>
      <div className='button-row'>
        {/* <button onClick={() => handleDelete(id)} className='delete-button'>
          Delete
        </button>
        <button className='update-button'>Update</button> */}
      </div>
    </div>
  );
};
export default ImageDetail;