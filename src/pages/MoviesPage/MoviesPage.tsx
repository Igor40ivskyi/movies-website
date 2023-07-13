import {Outlet} from "react-router-dom";

import './MoviesPage.css';

const MoviesPage = () => {

    return (
        <div className={'moviesPage'}>
            <Outlet/>
        </div>
    );
};

export {MoviesPage};