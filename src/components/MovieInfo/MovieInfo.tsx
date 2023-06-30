import {useAppSelector} from "../../hooks";
import {MovieInfoPerfomance} from "../movieInfoPerfomance/MovieInfoPerfomance";

import './MovieInfo.css'

const MovieInfo = () => {

    const {movieInfo, trailer} = useAppSelector(state => state.movieReducer);

    return (
        <div className={'main'}>
            {movieInfo && <MovieInfoPerfomance movieInfo={movieInfo} trailer={trailer}/>}
        </div>
    );
};

export {MovieInfo};