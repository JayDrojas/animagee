import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllImages } from '../../store/images';
import ImageDetail from './ImageDetail.js'
import './index.css';
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
                        <ImageDetail key={id} id={id} imageUrl={imageUrl} content={content}/>
                    ))}
                    <li></li>
                </ul>
            </div>
        </div>
    );
};
export default Images;
