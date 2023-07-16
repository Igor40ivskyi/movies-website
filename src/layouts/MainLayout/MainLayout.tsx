import {Outlet} from "react-router-dom";
import {useContext} from "react";

import {ThemeContext} from "../../App";
import {Header} from "../../components";
import './MainLayout.css';

const MainLayout = () => {


    const {theme} = useContext(ThemeContext);

    return (
        <div>
            <div id={theme}>
                <Header/>
                <Outlet/>
            </div>
        </div>
    );
};

export {MainLayout};