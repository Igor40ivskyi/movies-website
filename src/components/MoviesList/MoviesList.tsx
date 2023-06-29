import {FC, useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {Container, Pagination, Stack} from '@mui/material';

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

            <Container style={{border: '2px solid red', display: 'flex', justifyContent: 'center'}}>
                <Stack spacing={2}>
                    <Pagination shape={"rounded"} variant={"outlined"} sx={{marginY: 2}} count={500} page={+page    }
                                onChange={(_, num) => setQuery({page: `${num}`})}/>
                </Stack>
            </Container>

        </div>
    );
};

export {MoviesList};