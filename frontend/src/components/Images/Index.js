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

    console.log(images[1], "-------->")

    useEffect(() => {
        dispatch(getAllImages());
    }, [dispatch]);

    return (
        <main>
            <nav>
                {images?.map((image) => (
                    <Link key={image.id} to={`/images/${image.id}`} >
                        <h3>
                            {image.content}
                        </h3>
                        <img src={`${image.imageUrl}`} />
                    </Link>
                ))}
            </nav>
        <Route exact path='/images/:imageId'>
            <ImageDetail />
        </Route>
        </main>
    );
};
export default Images;
