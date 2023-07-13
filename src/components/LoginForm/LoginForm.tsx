import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useNavigate} from "react-router-dom";

import {AuthValidator} from "../../validators/auth.validator";
import {ILogin} from "../../types";
import {authActions} from "../../redux";
import {useAppDispatch} from "../../hooks";

const LoginForm = () => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm<ILogin>({
        mode: 'all',
        resolver: joiResolver(AuthValidator.login)
    });

    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    const loginUser:SubmitHandler<any> = async (user) => {
        await dispatch(authActions.login(user));
        navigate('/movies');
        reset();
    };

    return (
        <div className={'main'}>

            <div className={'formWrap'}>

                <form onSubmit={handleSubmit(loginUser)}>
                    <input type="text" placeholder={'email'} {...register('email')}/>
                    <input type="text" placeholder={'password'} {...register('password')}/>
                    <button>login</button>
                </form>

                <div className={'messageBlock'}>
                    {errors.email && <span>{errors.email.message}</span>}
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
            </div>
        </div>
    );
};

export {LoginForm};