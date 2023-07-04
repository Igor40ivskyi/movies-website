import {useAppDispatch, useAppSelector} from "../../hooks";
import {useEffect} from "react";
import {categoriesActions} from "../../redux/slices/categories.slice";
import {MoviesListItem} from "../MoviesListItem/MoviesListItem";

const Top_RatedMoviesList = () => {

    const {top_rated_movies} = useAppSelector(state => state.categoriesReducer);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(categoriesActions.getTop_ratedMoviesList());
    },[]);

    return (
        <div>
            <div className={'wrap'}>
                <div className={'moviesListContainer'}>
                    {top_rated_movies && top_rated_movies.map(item => <MoviesListItem key={item.id} movie={item}/>)}
                </div>
            </div>
        </div>
    );
};

export {Top_RatedMoviesList};