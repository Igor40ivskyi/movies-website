import {authService} from "../../services";
import {IndexRouteProps, Navigate, Outlet} from "react-router-dom";
import {FC} from "react";

const PrivateRoute = () => {


    const accessToken = authService.getAccessToken();


    return (
        accessToken ? <Outlet/> : <Navigate to={'/login'}/>
    );
};

export {PrivateRoute};