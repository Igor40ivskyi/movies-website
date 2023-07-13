import {NavLink, useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";
import {useContext, useEffect, useState} from "react";

import './Header.css';
import {authService} from "../../services";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {authActions} from "../../redux";
import {GenresList} from "../GenresList/GenresList";
import {ShowMe} from "../ShowMe/ShowMe";
import {ShowAuth} from "../ShowAuth/ShowAuth";
import {ShowMovies} from "../ShowMovies/ShowMovies";
import {Search} from "../Search/Search";
import ReactSwitch from "react-switch";
import {ThemeContext} from "../../App";

const Header = () => {

    const {me} = useAppSelector(state => state.authReducer);
    const userName = `${me}`;

    const [state, setState] = useState<number>(null);

    const {theme, toggleTheme} = useContext(ThemeContext);

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

                <ShowMovies/>

                <GenresList/>

                {/*<NavLink className={'find'} to={'/movies/find'}>FIND</NavLink>*/}

                <Search/>

                <ShowMe/>

                <div className={'switchContainer'}>
                    <ReactSwitch checked={theme === 'dark'} onChange={toggleTheme}/>
                </div>

            </div>
        </div>
    );
};

export {Header};