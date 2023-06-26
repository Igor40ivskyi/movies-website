import {SubmitHandler, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import {IRegister} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {authActions} from "../../redux";
import './RegisterForm.css';


const RegisterForm = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {register, handleSubmit, reset} = useForm<IRegister>();

    const registerUser: SubmitHandler<IRegister> = async (user) => {
        await dispatch(authActions.register(user));
        reset();
        navigate('/login');
    };

    return (<div className={'formWrap'}>

            <form onSubmit={handleSubmit(registerUser)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>register</button>
            </form>
        </div>
    );
};

export {RegisterForm};