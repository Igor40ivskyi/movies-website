import {useState} from "react";
import {useNavigate} from "react-router-dom";

import {movieService} from "../../services/movie.service";
import {IMovie} from "../../interfaces/movie.interface";
import './Search.css';

const Search = () => {

    const [searchValue, setSearchValue] = useState<string>('');
    const [byKeywordMovies, setByKeywordMovies] = useState<IMovie[]>([]);

    const firstHalfOfPoster = 'https://image.tmdb.org/t/p/w500';

    console.log(byKeywordMovies);

    const navigate = useNavigate();

    const handleInputChange = (event: any) => {
        const value = event.target.value;
        setSearchValue(value);
        movieService.getMoviesByKeyWord(value).then(value => value.data).then(value => setByKeywordMovies(value.results));
    };

    const handleClearClick = () => {
        setSearchValue('');
        setByKeywordMovies([]);
    };

    return (
        <div className={'search_container'}>

            <div className={'search'} id={'sss'}>

                <div onClick={() => {
                    const div = document.getElementById('sss');
                    div.classList.toggle('active');
                }} className={'icon'}>
                </div>

                <div className={'input'}>
                    <input value={searchValue} onChange={handleInputChange} type="text" placeholder={'search'}
                           id={'input1'}/>
                </div>

                <span onClick={handleClearClick} className={'clear'}></span>
            </div>

            <div className={'result_container'}>
                {byKeywordMovies && byKeywordMovies.map(item => <div onClick={()=>{
                    navigate('/movies/info',
                        {state:{id: item.id}})
                    setByKeywordMovies([]);
                }}

                     className={'byKeywordItem'} key={item.id}>
                    <div>
                        <img src={`${firstHalfOfPoster}${item.poster_path}`} alt=""/>
                        <div className={'byKeywordInfoBlock'}>
                            <div className={'byKeywordTitle'}>{item.original_title}</div>
                            <div>{item.release_date}, {item.original_language}</div>
                        </div>
                    </div>
                </div>)}
            </div>

        </div>
    );
};

export {Search};