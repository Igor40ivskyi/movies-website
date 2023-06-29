import {FC, useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {Container, Pagination} from '@mui/material';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux/slices/movie.slice";
import {MoviesListItem} from "../MoviesListItem/MoviesListItem";
import './MoviesList.css';

const MoviesList: FC = () => {

    const {movies, page} = useAppSelector(state => state.movieReducer);

    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams();

    const choose = query.get('page');

    useEffect(() => {
        dispatch(movieActions.getMoviesList({page: choose}));
    }, [choose, dispatch]);

    return (
        <div>
            <div className={'wrap'}>
                <div className={'moviesListContainer'}>
                    {movies && movies.map(item => <MoviesListItem key={item.id} movie={item}/>)}
                </div>
            </div>

            <Container style={{display: 'flex', justifyContent: 'center'}}>
                    <Pagination color={'primary'} shape={"rounded"} variant={"text"} sx={{marginY: 2}} count={500} page={+page}
                                onChange={(_, num) => setQuery({page: `${num}`})}/>
            </Container>

        </div>
    );
};

export {MoviesList};