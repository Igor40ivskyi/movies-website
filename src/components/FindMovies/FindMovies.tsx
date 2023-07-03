import {SubmitHandler, useForm} from "react-hook-form";

import './FindMovies.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux/slices/movie.slice";
import {findMoviesActions} from "../../redux/slices/findMovies.slice";
import {IMoviesSortParams} from "../../interfaces/moviesSortParams.interface";
import {MoviesListItem} from "../MoviesListItem/MoviesListItem";
import {Container, Pagination} from "@mui/material";

const FindMovies = () => {

    const {sortedMoviesList} = useAppSelector(state => state.findMoviesReducer);

    console.log(sortedMoviesList);


    const dispatch = useAppDispatch();

    const {register, handleSubmit, reset} = useForm<IMoviesSortParams>();

    const save: SubmitHandler<IMoviesSortParams> = (data) => {
        dispatch(findMoviesActions.getSortedMoviesList(data));
    };

    return (
        <div>

        <div className={'sortDivWrap'}>

            <div className={'sortDiv'}>
                <form className={'sortForm'} onSubmit={handleSubmit(save)}>
                    <input type="number" placeholder={'year'} {...register('primary_release_year')}/>
                    <select size={5} {...register('sort_by')}>
                        <option disabled={true} value="">choose sort</option>
                        <option value=""></option>
                        <option value="popularity.asc">popularity</option>
                        <option value="revenue.asc">revenue</option>
                        <option value="primary_release_date.asc">most resent</option>
                        <option value="vote_average.asc">by average vote</option>
                    </select>
                    <button>find</button>
                </form>
            </div>
        </div>

            <div className={'wrap'}>
                <div className={'moviesListContainer'}>
                    {sortedMoviesList && sortedMoviesList.map(item => <MoviesListItem key={item.id} movie={item}/>)}
                </div>
            </div>

            {/*<Container style={{display: 'flex', justifyContent: 'center'}}>*/}
            {/*    <Pagination color={'primary'} shape={"rounded"} variant={"text"} sx={{marginY: 2}} count={500} page={+page}*/}
            {/*                onChange={(_, num) => setQuery({page: `${num}`})}/>*/}
            {/*</Container>*/}

        </div>
    );
};

export {FindMovies};