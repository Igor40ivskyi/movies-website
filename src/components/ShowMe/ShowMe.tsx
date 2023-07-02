import {useAppSelector} from "../../hooks";

import './ShowMe.css';

const ShowMe = () => {
    const {me} = useAppSelector(state => state.authReducer);

    const userName = `${me}`;

    return (
        <div>
            {me && <div className={'showMe'}>
                <div>
                    {userName}
                </div>
            </div>}
        </div>
    );
};

export {ShowMe};