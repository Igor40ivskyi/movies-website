import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {authActions} from "../../redux";

const RegisterForm = () => {

    const dispatch = useAppDispatch();

    const {register, handleSubmit} = useForm<IAuth>();

    const registerUser: SubmitHandler<IAuth> = async (user) => {
        await dispatch(authActions.register(user));
    };

    return (
        <form onSubmit={handleSubmit(registerUser)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>register</button>
        </form>
    );
};

export {RegisterForm};