import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";

const MainLayout = () => {
    return (
        <div>
            <div>
                <Header/>
                <Outlet/>
            </div>
        </div>
    );
};

export {MainLayout};