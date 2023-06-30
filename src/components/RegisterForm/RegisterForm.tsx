import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {IRegister} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {authActions} from "../../redux";
import './RegisterForm.css';
import {joiResolver} from "@hookform/resolvers/joi";
import {AuthValidator} from "../../validators/auth.validator";


const RegisterForm = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {register, handleSubmit, reset, formState: {errors}} = useForm<IRegister>({
        mode: 'all',
        resolver: joiResolver(AuthValidator.register)
    });

    const registerUser: SubmitHandler<IRegister> = async (user) => {
        await dispatch(authActions.register(user));
        reset();
        navigate('/login');
    };


    return (
        <div className={'main'}>

            <div className={'formWrap'}>

                <form onSubmit={handleSubmit(registerUser)}>
                    <input type="text" placeholder={'name'} {...register('name')}/>
                    <input type="text" placeholder={'email'} {...register('email')}/>
                    <input type="text" placeholder={'password'} {...register('password')}/>
                    <button>register</button>
                </form>

                <div className={'messageBlock'}>
                    {errors.name && <span>{errors.name.message}</span>}
                    {errors.email && <span>{errors.email.message}</span>}
                    {errors.password && <span>{errors.password.message}</span>}
                </div>
            </div>

        </div>
    );
};

export {RegisterForm};