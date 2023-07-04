import './ShowMovies.css';
import {NavLink} from "react-router-dom";

const ShowMovies = () => {
    return (
        <div className={'categoriesContainer'}>
            <div className={'moviesLabel'}>Movies</div>
            <div className={'moviesCategories'}>
                <NavLink to={'movies'}>common</NavLink>
                <NavLink to={'/movies/popular'}>Popular</NavLink>
                <NavLink to={'/movies/top-rated'}>Top rated</NavLink>
                <NavLink to={'/movies/upcoming'}>Upcoming</NavLink>
                <NavLink to={'/movies/now-playing'}>Now playing</NavLink>
            </div>
        </div>
    );
};

export {ShowMovies};