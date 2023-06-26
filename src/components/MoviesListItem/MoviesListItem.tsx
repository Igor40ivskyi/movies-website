import {FC} from "react";

import {IMovie} from "../../interfaces/movie.interface";
import './MoviesListItem.css';


interface IProps {
    movie: IMovie
}

const MoviesListItem: FC<IProps> = ({movie}) => {
    const {original_language, title, poster_path,backdrop_path} = movie;

    const FirstHalfOfPoster = 'https://image.tmdb.org/t/p/w500';

    const fullPoster_path = `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (
        <div className={'moviesListItem'}>
            <div className={'title'}>{title}</div>
            <div>
                <img src={fullPoster_path} alt={title}/>
            </div>
        </div>
    );
};

export {MoviesListItem};