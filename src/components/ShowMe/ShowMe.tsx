import {useAppDispatch, useAppSelector} from "../../hooks";

import './ShowMe.css';
import {authService} from "../../services";
import {useNavigate} from "react-router-dom";
import {authActions} from "../../redux";

const ShowMe = () => {
    const {me} = useAppSelector(state => state.authReducer);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const userName = `${me}`;
    const firstLetter = userName.slice(0,1).toUpperCase();
    console.log(firstLetter);

    return (
        <div>
            {me &&
                <div className={'showMe'}>
                    <div>
                        {firstLetter}
                        {/*<AccountCircleTwoToneIcon/>*/}
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