import {authService} from "../../services";
import {Navigate, Outlet} from "react-router-dom";
import jwtDecode from "jwt-decode";

const PrivateRoute = () => {

    const accessToken = authService.getAccessToken();

    try {
        jwtDecode(authService.getAccessToken());
    }catch (e) {
        return <Navigate to={'/login'}/>;
    }

    return (
        accessToken ? <Outlet/> : <Navigate to={'/login'}/>
    );
};

export {PrivateRoute};