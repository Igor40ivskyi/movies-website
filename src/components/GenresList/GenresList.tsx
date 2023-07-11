import './GenresList.css';
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux/slices/movie.slice";
import {useNavigate} from "react-router-dom";

const GenresList = () => {

    const {genresList} = useAppSelector(state => state.movieReducer);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(movieActions.getGenresList());
    }, [dispatch]);

    return (
        <div className={'genresContainer'}>
            <div className={'label'}>Genres</div>
                <div className={'listContainer'}>
                        {genresList && genresList.map(genre => <div
                            onClick={() => navigate(`/movies/by-genre?genreId=${genre.id}&page=1`)}
                            key={genre.id}>{genre.name}</div>)}
                </div>



        </div>
    );
};

export {GenresList};