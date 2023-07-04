import './ShowAuth.css';
import {NavLink} from "react-router-dom";

const ShowAuth = () => {
    return (
        <div className={'authContainer'}>
            <div className={'authLabel'}>Auth</div>

            <div className={'authlist'}>
                    <NavLink className={'auth__link'} to={'register'}>Register</NavLink>
                    <NavLink className={'auth__link'} to={'login'}>Login</NavLink>
            </div>

        </div>
    );
};

export {ShowAuth};