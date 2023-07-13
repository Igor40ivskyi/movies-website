import {useNavigate} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {authService} from "../../services";
import {authActions} from "../../redux";
import './ShowMe.css';

const ShowMe = () => {
    const {me} = useAppSelector(state => state.authReducer);

    console.log(me);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const userName = `${me}`;
    const firstLetter = userName.slice(0,1).toUpperCase();

    return (
        <div>
            {me &&
                <div className={'showMe'}>
                    <div>
                        {firstLetter}
                    </div>

                    <div className={'userInfo'}>

                        <div className={'userName'} >{userName}</div>

                        <hr/>

                        <div className={'buttonBlock'}>
                            <button onClick={() => {
                                authService.removeTokens();
                                dispatch(authActions.resetMe(1));
                                navigate('/login');
                            }}>logout
                            </button>
                        </div>
                    </div>

                </div>}
        </div>
    );
};

export {ShowMe};