import {useAppDispatch, useAppSelector} from "../../hooks";
import {useEffect} from "react";
import {categoriesActions} from "../../redux/slices/categories.slice";
import {MoviesListItem} from "../MoviesListItem/MoviesListItem";

const Now_PlayingMoviesList = () => {

    const {now_playing_movies} = useAppSelector(state => state.categoriesReducer);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(categoriesActions.getNow_playingMoviesList());
    },[]);

    return (
        <div>
            <div className={'wrap'}>
                <div className={'moviesListContainer'}>
                    {now_playing_movies && now_playing_movies.map(item => <MoviesListItem key={item.id} movie={item}/>)}
                </div>
            </div>
        </div>
    );
};

export {Now_PlayingMoviesList};