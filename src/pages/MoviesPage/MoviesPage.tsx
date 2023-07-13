import {Outlet} from "react-router-dom";

import './MoviesPage.css';
import {useContext} from "react";
import {ThemeContext} from "../../App";

const MoviesPage = () => {

    return (
        <div className={'moviesPage'}>
            <Outlet/>
        </div>
    );
};

export {MoviesPage};