import { useEffect, useState } from "react";
import User from "../../model/User";
import UserService from "../../service/User.service";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import "./UserInfoPage.css";
import { useNavigate } from "react-router-dom";
import FormEditUserInfo from "../../components/FormEditUserInfo/FormEditUserInfo";

function UserInfoPage() {

    const [user, setUser] = useState({} as User);
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();
    const loggedUser : User = useSelector((state: RootState) => state.user.value);


    useEffect(() => {
        if(isNaN(loggedUser.id)) {
            navigate('/');
        } 
        const service = new UserService();
        service.getInfo(loggedUser.id).then((res) => {
            setUser(res);
        })
    },[])

    const updateUser = (user: User) => {
        console.log(user);
        setIsEditing(false);
    }
    const info = () => {
        return(<>
            <p>Name: {user.name}</p>
            <p>Phone Number: {user.phoneNumber}</p>
            <p>Gender: {user.gender}</p>
            <p>Email: {user.email}</p>
            <p>Document: {user.document}</p>
            <p>Birth: {user.birth}</p>
            <button onClick={() => setIsEditing(true)} >Edit</button>
        </>)
    }
    
    return(<>
        {isEditing ? <FormEditUserInfo onSubmit={updateUser} user={user} ></FormEditUserInfo> : info()}
    </>)
}

export default UserInfoPage;