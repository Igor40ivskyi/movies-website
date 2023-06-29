import {NavLink, useNavigate} from "react-router-dom";

import './Header.css';
import {authService} from "../../services";
import {useAppDispatch} from "../../hooks";
import {authActions} from "../../redux";

const Header = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    return (
        <div className={'header'}>
            <NavLink to={'register'}>Register</NavLink>
            <NavLink to={'login'}>Login</NavLink>
            <NavLink to={'movies'}>Movies</NavLink>
            <button onClick={()=>{
                authService.removeTokens();
                dispatch(authActions.resetMe(1));
                navigate('/login');
            } }>logout</button>
        </div>
    );
};

export {Header};