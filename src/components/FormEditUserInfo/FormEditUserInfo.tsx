import { SubmitHandler, useForm } from "react-hook-form";
import "./FormEditUserInfo.css";
import User from "../../model/User";

interface UserFormInput {
    name: string;
    phoneNumber: string;
    gender: string;
    email: string;
    document: string;
    birth: string;
}

type OnSubmitFunction = (user: User) => void;

function FormEditUserInfo( props : {
    onSubmit : OnSubmitFunction,
    user?: User
}){
    const onSubmitHandler: SubmitHandler<UserFormInput> = (data) => update(data)
    const { register, handleSubmit} = useForm<UserFormInput>({
        defaultValues: {
            name: props.user?.name,
            phoneNumber: props.user?.phoneNumber,
            gender: props.user?.gender,
            email: props.user?.email,
            document: props.user?.document,
            birth: props.user?.birth
        }
    });

    const update = (data: UserFormInput) => {
        
        props.onSubmit({
            name: data.name,
            phoneNumber: data.phoneNumber,
            gender: data.gender,
            email: data.email,
            document: data.document,
            birth: data.birth
        } as User)
    }
    return(<>
    <form className="form-update-user-info" onSubmit={handleSubmit(onSubmitHandler)}>

        <input  {...register("name", { required: "Name cannot be empty"})} placeholder="Name"/>
        <input  {...register("phoneNumber", { required: "Phone number cannot be empty"})} placeholder="Phone Number" />
        <input  {...register("gender", { required: "gender cannot be empty"})} placeholder="Gender"/>
        <input {...register("email", {
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
            }
        })} placeholder="E-Mail"/>
        <input  {...register("document", { required: "Document cannot be empty"})} placeholder="Document" />
        <input  {...register("birth", { required: "Birth cannot be empty"})}  placeholder="Birth"/>
        <input type="submit" />
      </form>
    </>);
}

export default FormEditUserInfo;