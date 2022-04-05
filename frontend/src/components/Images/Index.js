import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllImages } from '../../store/images';
import ImageDetail from './ImageDetail.js'
import './index.css';
const Images = () => {
    const dispatch = useDispatch();
    const images = useSelector((state) => {
        return Object.values(state.image)
    });

    useEffect(() => {
        dispatch(getAllImages());
    }, [dispatch]);

    return (
        <div>
            <div className='images'>
                {images?.map(({ id, imageUrl, content, userId }) => (
                    <ImageDetail key={id} id={id} imageUrl={imageUrl} content={content} userId={userId}/>
                ))}
            </div>
        </div>
    );
};
export default Images;
