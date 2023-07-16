import {useContext, useEffect, useState} from "react";
import jwtDecode from "jwt-decode";
import ReactSwitch from "react-switch";

import {authService} from "../../services";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {authActions} from "../../redux";
import {GenresList} from "../GenresList/GenresList";
import {ShowMe} from "../ShowMe/ShowMe";
import {ShowAuth} from "../ShowAuth/ShowAuth";
import {ShowMovies} from "../ShowMovies/ShowMovies";
import {Search} from "../Search/Search";
import {ThemeContext} from "../../App";
import './Header.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness2RoundedIcon from '@mui/icons-material/Brightness2Rounded';

const Header = () => {
    const {me} = useAppSelector(state => state.authReducer);

    const [, setState] = useState<number>(null);
    const {theme, toggleTheme} = useContext(ThemeContext);

    const dispatch = useAppDispatch();

    const accessToken = authService.getAccessToken();

    useEffect(() => {
        try {
            const {name} = jwtDecode<{ name: string; }>(accessToken);
            dispatch(authActions.setMe(name));
            setState(1);
        } catch (e) {
            setState(0);
        }
    }, [accessToken, dispatch]);


    // @ts-ignore
    // @ts-ignore
    return (
        <div className={'headerWrap'}>

            <div className={'header'}>

                <ShowAuth/>

                {me && <div className={'contentBlock'}>

                    <ShowMovies/>

                    <GenresList/>

                    <Search/>


                    <div className={'switchContainer'}>
                        <ReactSwitch
                            checkedIcon={<WbSunnyIcon fontSize={'small'} className={'sunnyIcon'}/>}
                            uncheckedIcon={<Brightness2RoundedIcon fontSize={'small'} className={'moonIcon'}/>}
                            handleDiameter={22}
                            height={20} width={45} onColor={'#161616'} offColor={'#000000'} checked={theme === 'dark'}
                            onChange={toggleTheme}/>
                    </div>

                    <ShowMe/>
                </div>}

            </div>
        </div>
    );
};

export {Header};