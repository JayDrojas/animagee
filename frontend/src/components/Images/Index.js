import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllImages } from '../../store/images';
const Images = () => {
    const dispatch = useDispatch();
    const images = useSelector((state) => {
        console.log(state.images)
        return Object.values(state.image)});
    console.log('images', images);

    useEffect(() => {
        dispatch(getAllImages());
      }, [dispatch]);

    return (
        <div>
            <div className='images'>
                <ul>
                    {images?.map(({ id, imageUrl, content }) => (
                        // <ProductDetail
                        // key={id}
                        <li key={id}>
                            <span>{content}</span>
                            <img src={imageUrl}></img>
                            {/* id={id}
                            image={imageUrl}
                            title={content} */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default Images;
