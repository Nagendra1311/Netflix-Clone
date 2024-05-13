import { createSlice } from "@reduxjs/toolkit";

let user = localStorage.getItem('user') && localStorage.getItem('user') !== "undefined" ?
    JSON.parse(localStorage.getItem('user')) : {
        name: '',
        email: '',

    }

const UserSlice = createSlice({
    name: "user",
    initialState: {
        user: user ?? {
            name: '',
            email: '',

        },
    },
    reducers: {
        //action
        setUser: (state, action) => {
            localStorage.setItem('users', JSON.stringify(action.payload))

            state.user = action.payload;
        }
    }
})

export const { setUser } = UserSlice.actions;
export default UserSlice.reducer;