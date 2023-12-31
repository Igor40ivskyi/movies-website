import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {categoriesActions} from "../../redux";
import {MoviesListItem} from "../MoviesListItem/MoviesListItem";

const PopularMoviesList = () => {

    const {popular_movies} = useAppSelector(state => state.categoriesReducer);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(categoriesActions.getPopularMoviesList());
    }, [dispatch]);

    return (
        <div>
            <div className={'wrap'}>
                <div className={'moviesListContainer'}>
                    {popular_movies && popular_movies.map(item => <MoviesListItem key={item.id} movie={item}/>)}
                </div>
            </div>
        </div>
    );
};

export {PopularMoviesList};