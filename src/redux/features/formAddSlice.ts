import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    isShow : false,
}

export const formAddSlice = createSlice({
    name : "formAdd",
    initialState,
    reducers : {
        showForm : (state) => {
            state.isShow = true;
        },
        hideForm : (state) => {
            state.isShow = false;
        }
    }

})


export const { showForm, hideForm } = formAddSlice.actions;
export default formAddSlice.reducer