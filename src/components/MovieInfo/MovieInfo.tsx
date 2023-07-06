import {useLocation} from "react-router-dom";
import {useEffect} from "react";

import {MovieInfoPerfomance} from "../movieInfoPerfomance/MovieInfoPerfomance";
import {movieActions} from "../../redux/slices/movie.slice";
import {useAppDispatch, useAppSelector} from "../../hooks";
import './MovieInfo.css'

const MovieInfo = () => {

    const {movieInfo, trailer} = useAppSelector(state => state.movieReducer);

    const {state:{id}} = useLocation();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getMovieInfo(id));
        dispatch(movieActions.getVideoTrailer(id));
        dispatch(movieActions.getRecommendationsForMovie(id));
    },[id]);

    return (
        <div className={'movieInfoWrap'}>
            {movieInfo && <MovieInfoPerfomance movieInfo={movieInfo} trailer={trailer}/>}
        </div>
    );
};

export {MovieInfo};