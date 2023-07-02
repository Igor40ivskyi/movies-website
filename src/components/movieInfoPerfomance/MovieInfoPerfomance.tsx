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


    return (
        <div className={'main'}>
            {trailer?.results[0] && <YouTube videoId={trailer.results[0].key}/>}
            {<div className={'infoWrap'}>
                <div>title: {title}</div>
                <div>overview: {overview}</div>
                <div>original_language: {original_language}</div>
                <div>original_title: {original_title}</div>
                <div>budget: {budget}</div>
                <div>release_date: {release_date}</div>
                <div>runtime: {runtime}</div>
                <div>status: {status}</div>
                <div>vote_average: {vote_average}</div>
                <div>vote_count: {vote_count}</div>
            </div>}
        </div>
    );
};

export {MovieInfoPerfomance};