import {NavLink} from "react-router-dom";

import './Header.css';

const Header = () => {
    return (
        <div className={'header'}>
            <NavLink to={'register'}>Register</NavLink>
            <NavLink to={'login'}>Login</NavLink>
            <NavLink to={'movies'}>Movies</NavLink>
        </div>
    );
};

export {Header};