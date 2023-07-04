import {NavLink, useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";
import {useEffect, useState} from "react";

import './Header.css';
import {authService} from "../../services";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {authActions} from "../../redux";
import {GenresList} from "../GenresList/GenresList";
import {ShowMe} from "../ShowMe/ShowMe";
import {ShowAuth} from "../ShowAuth/ShowAuth";

const Header = () => {

    const {me} = useAppSelector(state => state.authReducer);
    const userName = `${me}`;

    const [state, setState] = useState<number>(null);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const accessToken = authService.getAccessToken();

    useEffect(() => {
        try {
            const {name} = jwtDecode<{ name: string;}>(accessToken);
            dispatch(authActions.setMe(name));
            setState(1);
        }catch (e) {
             setState(0);
        }
    }, [accessToken]);


    return (
        <div className={'headerWrap'}>

            <div className={'header'}>


                <ShowAuth/>
                {/*<div className={'authBlock'}>*/}
                {/*    <div className={'authBlock1'}>*/}
                {/*        AUTH*/}
                {/*    </div>*/}
                {/*    <NavLink className={'authBlock1 option'} to={'register'}>Register</NavLink>*/}
                {/*    <NavLink className={'authBlock1 option'} to={'login'}>Login</NavLink>*/}
                {/*</div>*/}

                <NavLink className={'find'} to={'/movies/find'}>FIND</NavLink>

                {state && <NavLink className={'authBlock1 option'} to={'movies'}>Movies</NavLink>}

                <GenresList/>

                <ShowMe/>
                {/*<div className={'showMe'}>{userName}</div>*/}

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