import {useForm} from "react-hook-form";

import './FindMovies.css';
import {useAppDispatch} from "../../hooks";
import {movieActions} from "../../redux/slices/movie.slice";

const FindMovies = () => {

    const dispatch = useAppDispatch();

    const {register, handleSubmit, reset} = useForm();

    const save = (data: any) => {
        dispatch(movieActions.getSortedMoviesList(data));
    };

    return (
        <div className={'sortDiv'}>
            <form onSubmit={handleSubmit(save)}>
                <input type="checkbox" placeholder={'adult'} {...register('include_adult')}/>
                <input type="number" placeholder={'year'} {...register('primary_release_year')}/>
                <input type="text" placeholder={'key word'} {...register('with_keywords')}/>
                <select {...register('sort_by')}>
                    <option value="">sort by</option>
                    <option value="popularity.asc">popularity</option>
                    <option value="revenue.asc">revenue</option>
                    <option value="primary_release_date.asc">most resent</option>
                    <option value="vote_average.asc">by average vote</option>
                </select>
                <button>find</button>
            </form>
        </div>
    );
};

export {FindMovies};