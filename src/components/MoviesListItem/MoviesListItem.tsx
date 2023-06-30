import {FC} from "react";

import {IMovie} from "../../interfaces/movie.interface";
import './MoviesListItem.css';
import {useNavigate} from "react-router-dom";

interface IProps {
    movie: IMovie
}

const MoviesListItem: FC<IProps> = ({movie}) => {

    const {original_language, title, poster_path, id} = movie;

    const FirstHalfOfPoster = 'https://image.tmdb.org/t/p/w500';
    const fullPoster_path = `${FirstHalfOfPoster}${poster_path}`;

    const navigate = useNavigate();

    return (
        <div>

            <div onClick={() => navigate('info',{state:{id}})} className={'moviesListItem'}>
                <div className={'imageContainer'}>
                    <img src={fullPoster_path} alt={title}/>
                </div>
            </div>

            <div className={'title'}>{title}</div>

        </div>
    );

};

export {MoviesListItem};