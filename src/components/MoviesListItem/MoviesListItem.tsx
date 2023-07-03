import {FC} from "react";

import {IMovie} from "../../interfaces/movie.interface";
import './MoviesListItem.css';
import {useNavigate} from "react-router-dom";

interface IProps {
    movie: IMovie
}

const MoviesListItem: FC<IProps> = ({movie}) => {

    const {title, poster_path, id} = movie;

    const FirstHalfOfPoster = 'https://image.tmdb.org/t/p/w500';
    let fullPoster_path = `${FirstHalfOfPoster}${poster_path}`;

    if (!poster_path) {
        fullPoster_path = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
    }

    const navigate = useNavigate();

    return (
        <div>

            <div onClick={() => navigate('/movies/info',{state:{id}})} className={'moviesListItem'}>
                <div className={'imageContainer'}>
                    <img src={fullPoster_path} alt={title}/>
                </div>
            </div>

            <div className={'title'}>{title}</div>

        </div>
    );

};

export {MoviesListItem};