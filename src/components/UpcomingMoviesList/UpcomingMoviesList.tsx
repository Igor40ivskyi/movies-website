import {useAppDispatch, useAppSelector} from "../../hooks";
import {useEffect} from "react";
import {categoriesActions} from "../../redux/slices/categories.slice";
import {MoviesListItem} from "../MoviesListItem/MoviesListItem";

const UpcomingMoviesList = () => {

    const {upcoming_movies} = useAppSelector(state => state.categoriesReducer);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(categoriesActions.getUpcomingMoviesList());
    },[]);

    return (
        <div>
            <div className={'wrap'}>
                <div className={'moviesListContainer'}>
                    {upcoming_movies && upcoming_movies.map(item => <MoviesListItem key={item.id} movie={item}/>)}
                </div>
            </div>
        </div>
    );
};

export {UpcomingMoviesList};