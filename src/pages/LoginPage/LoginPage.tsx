import { useForm, SubmitHandler } from "react-hook-form"
import "./LoginPace.css";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../store/store";
import UserService from "../../service/User.service";
import {login as loginDispatch} from '../../store/user/userSlice';
import { useDispatch } from "react-redux";
interface LoginFormInput {
    email: string
    password: string
}

function LoginPage() {
    const { 
        register, 
        handleSubmit, 
        formState: { 
            errors 
        }, 
    } = useForm<LoginFormInput>();

    const dispatch = useDispatch<AppDispatch>();
    const onSubmit: SubmitHandler<LoginFormInput> = (data) => login(data)
    const navigate = useNavigate();

    const login = (data: LoginFormInput) => {
        const service = new UserService();
        service.login(data.email, data.password).then((res) => {
            dispatch(loginDispatch(res));
            navigate("/");
        })
        
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email", {
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
            }
        })} />
        <input type="password" {...register("password", { required: "Password cannot be empty"})} />

        {errors.email && <p role="alert">{errors.email.message}</p>}
        {errors.password && <p role="alert">{errors.password.message}</p>}
        <input type="submit" />
      </form>
    )
}

export default LoginPage;