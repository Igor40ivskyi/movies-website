import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {categoriesActions} from "../../redux";
import {MoviesListItem} from "../MoviesListItem/MoviesListItem";

const TopRatedMoviesList = () => {

    const {top_rated_movies} = useAppSelector(state => state.categoriesReducer);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(categoriesActions.getTop_ratedMoviesList());
    },[dispatch]);

    return (
        <div>
            <div className={'wrap'}>
                <div className={'moviesListContainer'}>
                    {top_rated_movies && top_rated_movies.map(item => <MoviesListItem key={item.id} movie={item}/>)}
                </div>
            </div>
        </div>
    );
};

export {TopRatedMoviesList};