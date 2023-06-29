import {SubmitHandler, useForm} from "react-hook-form";
import {ILogin} from "../../types";
import {useDispatch} from "react-redux";
import {authActions} from "../../redux";
import {joiResolver} from "@hookform/resolvers/joi";
import {AuthValidator} from "../../validators/auth.validator";

const LoginForm = () => {

    const dispatch = useDispatch();

    const {register, handleSubmit, reset, formState: {errors}} = useForm<ILogin>({
        mode: 'all',
        resolver: joiResolver(AuthValidator.login)
    });

    const loginUser:SubmitHandler<any> = async (user) => {
        // @ts-ignore
        await dispatch(authActions.login(user));
        reset();
    };

    return (
        <div>

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
    );
};

export {LoginForm};