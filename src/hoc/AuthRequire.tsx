import {FC, ReactElement} from "react";
import {authService} from "../services";
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../hooks";

interface IProps{
    children: ReactElement;
}

const AuthRequire:FC<IProps> = ({children}) => {

    const accessToken = authService.getAccessToken();

    const {me} = useAppSelector(state => state.authReducer);

    if (!accessToken || !me) {
        return <Navigate to={'/login'}/>;
    }

    if (accessToken && me) {

    return children;
    }
};

export {AuthRequire};