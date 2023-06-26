import {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux/slices/movie.slice";
import {MoviesListItem} from "../MoviesListItem/MoviesListItem";
import './MoviesList.css';

const MoviesList: FC = () => {

    const dispatch = useAppDispatch();
    const {movies} = useAppSelector(state => state.movieReducer);

    useEffect(() => {
        dispatch(movieActions.getMoviesList());
    },[]);

    return (
        <div className={'wrap'}>
            <div className={'moviesListContainer'}>
                {movies && movies.map(item => <MoviesListItem key={item.id} movie={item}/>)}
            </div>
        </div>
    );
};

export {MoviesList};