import './Search.css';
import {useState} from "react";
import {movieService} from "../../services/movie.service";
import {IMovie} from "../../interfaces/movie.interface";

const Search = () => {

    const [searchValue, setSearchValue] = useState<string>('');
    const [byKeywordMovies, setByKeywordMovies] = useState<IMovie[]>([]);

    console.log(byKeywordMovies);

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
                {byKeywordMovies && byKeywordMovies.map(item => <div className={'byKeywordItem'} key={item.id}></div>)}
            </div>

        </div>
    );
};

export {Search};