import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {Pagination} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {MoviesListItem} from "../MoviesListItem/MoviesListItem";

const MoviesListByGenre = () => {

    const {moviesByGenre, pageByGenre, total_pagesByGenre} = useAppSelector(state => state.movieReducer);

    const [params,setParams] = useSearchParams();
    const dispatch = useAppDispatch();

    const genreId = params.get('genreId');
    const page = params.get('page');

    useEffect(() => {
        dispatch(movieActions.getMoviesListByGenreId({genreId, page}));
    }, [genreId,page,dispatch]);


    return (
        <div>

            <div className={'wrap'}>
                <div className={'moviesListContainer'}>
                    {moviesByGenre && moviesByGenre.map(item => <MoviesListItem key={item.id} movie={item}/>)}
                </div>
            </div>

            <div className={'paginationWrap'}>
                <div className={'paginationContainer'}>
                    <Pagination size={'large'} color={'primary'} shape={"rounded"} variant={"text"} sx={{marginY: 2}}
                                count={total_pagesByGenre < 500 ? total_pagesByGenre : 500} page={+pageByGenre}
                                onChange={(_, num) => setParams({genreId: genreId, page: `${num}`})}/>
                </div>
            </div>

        </div>
    );
};

export {MoviesListByGenre};
