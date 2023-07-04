import {FC} from "react";
import {IMovieInfo} from "../../interfaces/movieInfo.interface";
import {ITrailer} from "../../interfaces/trailer.interface";
import YouTube from "react-youtube";

import './MovieInfoPerfomance.css'

interface IProps {
    movieInfo: IMovieInfo;
    trailer: ITrailer;
}

const MovieInfoPerfomance: FC<IProps> = ({movieInfo, trailer}) => {

    const {
        title, overview, poster_path, backdrop_path, original_language, original_title, budget, production_countries
        , release_date, runtime, status, vote_average, vote_count
    } = movieInfo;

    const FirstHalfOfPoster = 'https://image.tmdb.org/t/p/w500';
    let fullPoster_path = `${FirstHalfOfPoster}${backdrop_path}`;

    return (
        <div className={'main'}>
            {<div className={'infoWrap'}>
                <div>
                    <img src={fullPoster_path} alt={title}/>
                </div>
                <div className={'infoText'}>
                    <h2>{title}</h2>
                    <p>{overview}</p>
                    <div><span>Language:</span> {original_language}</div>
                    <div><span>Original title:</span> {original_title}</div>
                    <div><span>Budget:</span> {budget}</div>
                    <div><span>Release date:</span> {release_date}</div>
                    <div><span>Runtime:</span> {runtime} minutes</div>
                    <div><span>Status:</span> {status}</div>
                    <div><span>vote_average:</span> {vote_average}</div>
                    <div><span>Vote count:</span> {vote_count}</div>
                </div>
            </div>}
            {trailer?.results[0] && <YouTube videoId={trailer.results[0].key}/>}
        </div>
    );
};

export {MovieInfoPerfomance};