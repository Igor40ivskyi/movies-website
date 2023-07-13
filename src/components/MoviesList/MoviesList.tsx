import {FC, useEffect} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {Pagination} from '@mui/material';
import jwtDecode from "jwt-decode";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux/slices/movie.slice";
import {MoviesListItem} from "../MoviesListItem/MoviesListItem";
import {authService} from "../../services";
import './MoviesList.css';

const MoviesList: FC = () => {

    const {movies, page} = useAppSelector(state => state.movieReducer);

    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams();
    const navigate = useNavigate();

    const choose = query.get('page');

    useEffect(() => {
        dispatch(movieActions.getMoviesList({page: choose}));

        try {
            jwtDecode(authService.getAccessToken());
        } catch (e) {
            navigate('/login');
        }
    }, [choose, dispatch, navigate]);

    return (
        <div>
            <div className={'wrap'}>
                <div className={'moviesListContainer'}>
                    {movies && movies.map(item => <MoviesListItem key={item.id} movie={item}/>)}
                </div>
            </div>

            <div className={'paginationWrap'}>
                <div className={'paginationContainer'}>
                    <Pagination size={"large"} color={'primary'} shape={"rounded"} variant={"text"} sx={{marginY: 2}}
                                count={500} page={+page}
                                onChange={(_, num) => setQuery({page: `${num}`})}/>
                </div>
            </div>

        </div>
    );
};

export {MoviesList};