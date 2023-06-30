import {NavLink, useNavigate} from "react-router-dom";

import './Header.css';
import {authService} from "../../services";
import {useAppDispatch} from "../../hooks";
import {authActions} from "../../redux";
import jwtDecode from "jwt-decode";
import {useEffect, useState} from "react";

const Header = () => {

    const [state,setState] = useState(null);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const accessToken = authService.getAccessToken();

    useEffect(() => {
        try {
            const res = jwtDecode<string>(accessToken);
            setState(1);
        }catch (e) {
             setState(0);
        }
    }, [accessToken]);



    return (
        <div className={'headerWrap'}>

            <div className={'header'}>

                <div className={'authBlock'}>
                    <div className={'authBlock1'}>
                        AUTH
                    </div>
                        <NavLink className={'authBlock1 option'} to={'register'}>Register</NavLink>
                        <NavLink className={'authBlock1 option'} to={'login'}>Login</NavLink>
                </div>

                {state&& <NavLink className={'authBlock1 option'} to={'movies'}>Movies</NavLink>}

                <div className={'buttonBlock'}>
                    <button onClick={() => {
                        authService.removeTokens();
                        dispatch(authActions.resetMe(1));
                        navigate('/login');
                    }}>logout
                    </button>
                </div>

            </div>
        </div>
    );
};

export {Header};