import User from "../../model/User";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
    value: User;
}

const initialState : UserState =  {
    value: {
        isLogged: false
    } as User
};

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        login: (user, action : PayloadAction<User>) => {
            user.value = action.payload;
            console.log(user.value, action);
        },
    },
});

export const {login} = userSlice.actions;
export default userSlice.reducer;