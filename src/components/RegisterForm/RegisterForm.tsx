import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../../interfaces";

const RegisterForm = () => {

    const {register, handleSubmit} = useForm<IAuth>();

    const registerUser: SubmitHandler<IAuth> = async (user) => {



    };

    return (
        <form onSubmit={handleSubmit(registerUser)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>register</button>
        </form>
    );
};

export {RegisterForm};