import {useLocation} from "react-router-dom";
import {useEffect} from "react";

import {MovieInfoPerfomance} from "../movieInfoPerfomance/MovieInfoPerfomance";
import {movieActions} from "../../redux/slices/movie.slice";
import {useAppDispatch, useAppSelector} from "../../hooks";
import './MovieInfo.css'

const MovieInfo = () => {

    const {movieInfo, trailer} = useAppSelector(state => state.movieReducer);

    console.log(movieInfo);

    const {state:{id}} = useLocation();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getMovieInfo(id));
        dispatch(movieActions.getVideoTrailer(id));
    },[]);

    return (
        <div className={'main'}>
            {movieInfo && <MovieInfoPerfomance movieInfo={movieInfo} trailer={trailer}/>}
        </div>
    );
};

export {MovieInfo};