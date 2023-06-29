import {FC, ReactElement} from "react";
import {authService} from "../services";
import {Navigate} from "react-router-dom";

interface IProps{
    children: ReactElement;
}

const AuthRequire:FC<IProps> = ({children}) => {

    const accessToken = authService.getAccessToken();


    if (!accessToken ) {
        return <Navigate to={'/login'}/>;
    }

    return children;
};

export {AuthRequire};