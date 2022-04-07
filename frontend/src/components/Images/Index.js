import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Route, useParams } from 'react-router-dom';

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
        <main>
            <div className="all-images-container">
                <nav>
                    {images?.map((image) => (
                        <Link key={image.id} to={`/images/${image.id}`} >
                            <img className="images-all-main" src={`${image.imageUrl}`} />
                        </Link>
                    ))}
                </nav>
            </div>
        </main>
    );
};
export default Images;
