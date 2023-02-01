// import { fetchPosts } from '../api';
import { getAllUsersInapi } from '../Api/api.js'
const { createSlice } = require('@reduxjs/toolkit');


const profileslice = createSlice({
    name: 'profile',
    initialState: [],
    reducers: {
        addALLUsers(state, action) {
            return action.payload;
        }
    },

});

export const { addALLUsers } = profileslice.actions;
export default profileslice.reducer;

// Thunks

export function getAllUsers() {
    return async function getAllUserThunk(dispatch, getState) {
        try {
            const data = await getAllUsersInapi();
            // console.log(data);
            dispatch(addALLUsers(data));

        } catch (err) {
            console.log("error in getPost ", err);
        }
    };
}