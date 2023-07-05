import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux/slices/movie.slice";
import {MoviesListItem} from "../MoviesListItem/MoviesListItem";
import {Container, Pagination} from "@mui/material";

const MoviesListByGenre = () => {

    const {moviesByGenre, pageByGenre, total_pagesByGenre} = useAppSelector(state => state.movieReducer);

    console.log(total_pagesByGenre);

    const [params,setParams] = useSearchParams();
    const dispatch = useAppDispatch();

    const genreId = params.get('genreId');
    const page = params.get('page');


    useEffect(() => {
        dispatch(movieActions.getMoviesListByGenreId({genreId, page}));
    }, [genreId,page]);


    return (
        <div>
            <div className={'wrap'}>
                <div className={'moviesListContainer'}>
                    {moviesByGenre && moviesByGenre.map(item => <MoviesListItem key={item.id} movie={item}/>)}
                </div>
            </div>

            {/*<Container style={{display: 'flex', justifyContent: 'center'}}>*/}
            <div className={'paginationWrap'}>
                <div className={'paginationContainer'}>
                    <Pagination size={'large'} color={'primary'} shape={"rounded"} variant={"text"} sx={{marginY: 2}}
                                count={total_pagesByGenre < 500 ? total_pagesByGenre : 500} page={+pageByGenre}
                                onChange={(_, num) => setParams(prev => ({genreId: genreId, page: `${num}`}))}/>
                </div>
            </div>
            {/*</Container>*/}

        </div>
    );
};

export {MoviesListByGenre};
