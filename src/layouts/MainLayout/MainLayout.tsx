import {Outlet} from "react-router-dom";
import {Header} from "../../components/Header/Header";
import {useContext} from "react";
import {ThemeContext} from "../../App";
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