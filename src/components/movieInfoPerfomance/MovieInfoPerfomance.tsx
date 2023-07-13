import {FC} from "react";
import YouTube from "react-youtube";
import ReactStars from 'react-stars';

import {RecommendationsList} from "../RecommendationsList/RecommendationsList";
import {IMovieInfo} from "../../interfaces/movieInfo.interface";
import {ITrailer} from "../../interfaces/trailer.interface";
import {Badge} from "../Badge/Badge";
import './MovieInfoPerfomance.css'

interface IProps {
    movieInfo: IMovieInfo;
    trailer: ITrailer;
}

const MovieInfoPerfomance: FC<IProps> = ({movieInfo, trailer}) => {

    const {
        title, overview, backdrop_path, original_language, original_title, budget,
        release_date, runtime, status, vote_average, vote_count, genres
    } = movieInfo;


    const FirstHalfOfPoster = 'https://image.tmdb.org/t/p/w500';
    let fullPoster_path = `${FirstHalfOfPoster}${backdrop_path}`;

    if (!backdrop_path) {
        fullPoster_path = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
    }

    return (
        <div className={'mainPerformanceWrap'}>
            {<div className={'infoWrap'}>
                <div>
                    <img src={fullPoster_path} alt={title}/>

                    <div className={'badgesListWrap'}>
                        <div className={'genresRelated'}>
                            Related genres
                        </div>
                        {genres.map(item => <Badge key={item.id} genre={item}/>)}
                    </div>

                </div>

                <div className={'infoText'}>
                    <h2>{title}</h2>
                    <p>{overview}</p>
                    <ReactStars count={10} size={30} color2={'gold'} value={vote_average} edit={false}/>
                    <div><span>Language:</span> {original_language}</div>
                    <div><span>Original title:</span> {original_title}</div>
                    <div><span>Budget:</span> {budget}</div>
                    <div><span>Release date:</span> {release_date}</div>
                    <div><span>Runtime:</span> {runtime} minutes</div>
                    <div><span>Status:</span> {status}</div>
                    <div><span>Vote count:</span> {vote_count}</div>
                </div>

            </div>}

            <div className={'trailerBlock'}>
                {trailer?.results[0] && <YouTube videoId={trailer.results[0].key}
                                                 opts={{width: 1150, height: 550}}/>}
            </div>

            <RecommendationsList/>

        </div>
    );
};

export {MovieInfoPerfomance};