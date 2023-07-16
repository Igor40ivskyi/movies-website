import {useEffect} from "react";
import {useLocation} from "react-router-dom";

import {MovieInfoPerfomance} from "../MovieInfoPerfomance/MovieInfoPerfomance";
import {movieActions} from "../../redux";
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
    },[id,dispatch]);

    return (
        <div className={'movieInfoWrap'}>
            {movieInfo && <MovieInfoPerfomance movieInfo={movieInfo} trailer={trailer}/>}
        </div>
    );
};

export {MovieInfo};