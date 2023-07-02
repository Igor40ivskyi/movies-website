import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux/slices/movie.slice";
import {MoviesListItem} from "../MoviesListItem/MoviesListItem";
import {Container, Pagination} from "@mui/material";

const MoviesListByGenre = () => {

    const {moviesByGenre, pageByGenre} = useAppSelector(state => state.movieReducer);

    const [params,setParams] = useSearchParams();
    const dispatch = useAppDispatch();

    const genreId = params.get('genreId');

    useEffect(() => {
        dispatch(movieActions.getMoviesListByGenreId(genreId))
    }, [genreId]);


    return (
        <div>
            <div className={'wrap'}>
                <div className={'moviesListContainer'}>
                    {moviesByGenre && moviesByGenre.map(item => <MoviesListItem key={item.id} movie={item}/>)}
                </div>
            </div>

            <Container style={{display: 'flex', justifyContent: 'center'}}>
                <Pagination color={'primary'} shape={"rounded"} variant={"text"} sx={{marginY: 2}} count={500} page={+pageByGenre}
                            onChange={(_, num) => setParams(prev=>({genre_id: genreId,page: `${num}`}))}/>
            </Container>

        </div>
    );
};

export {MoviesListByGenre};
