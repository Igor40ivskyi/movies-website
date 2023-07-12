import './ShowAuth.css';
import {NavLink} from "react-router-dom";

const ShowAuth = () => {
    return (
        <div className={'authContainer'}>
            <div className={'authLabel'}>AUTH</div>

            <div className={'authlist'}>
                    <NavLink className={'auth__link'} to={'login'}>sign in</NavLink>
                    <NavLink className={'auth__link'} to={'register'}>sign up</NavLink>
            </div>

        </div>
    );
};

export {ShowAuth};