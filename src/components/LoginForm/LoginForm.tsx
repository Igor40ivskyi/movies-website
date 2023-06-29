import {SubmitHandler, useForm} from "react-hook-form";
import {ILogin} from "../../types";
import {useDispatch} from "react-redux";
import {authActions} from "../../redux";

const LoginForm = () => {

    const dispatch = useDispatch();

    const {register, handleSubmit, reset} = useForm<ILogin>();

    const loginUser:SubmitHandler<any> = async (user) => {
        // @ts-ignore
        await dispatch(authActions.login(user));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(loginUser)}>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>login</button>
        </form>
    );
};

export {LoginForm};