import {SubmitHandler, useForm} from "react-hook-form";
import {ILogin} from "../../types";
import {authService} from "../../services";

const LoginForm = () => {

    const {register, handleSubmit} = useForm<ILogin>();

    const loginUser: SubmitHandler<ILogin> = async (user) => {
        await authService.login(user);

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