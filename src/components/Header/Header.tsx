import {useContext, useEffect, useState} from "react";
import jwtDecode from "jwt-decode";
import ReactSwitch from "react-switch";

import {authService} from "../../services";
import {useAppDispatch} from "../../hooks";
import {authActions} from "../../redux";
import {GenresList} from "../GenresList/GenresList";
import {ShowMe} from "../ShowMe/ShowMe";
import {ShowAuth} from "../ShowAuth/ShowAuth";
import {ShowMovies} from "../ShowMovies/ShowMovies";
import {Search} from "../Search/Search";
import {ThemeContext} from "../../App";
import './Header.css';

const Header = () => {

    const [, setState] = useState<number>(null);
    const {theme, toggleTheme} = useContext(ThemeContext);

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