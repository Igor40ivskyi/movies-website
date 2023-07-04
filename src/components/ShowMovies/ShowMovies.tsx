import './ShowMovies.css';
import {NavLink} from "react-router-dom";

const ShowMovies = () => {
    return (
        <div className={'categoriesContainer'}>
            <div className={'moviesLabel'}>Movies</div>
            <div className={'moviesCategories'}>
                <NavLink to={'popular'}>Popular</NavLink>
                <NavLink to={'top-rated'}>Top rated</NavLink>
                <NavLink to={'upcoming'}>Upcoming</NavLink>
                <NavLink to={'now-playing'}>Now playing</NavLink>
            </div>
        </div>
    );
};

export {ShowMovies};
