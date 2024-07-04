import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    isShow : false,
}

export const formSlice = createSlice({
    name : "form",
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


export const { showForm, hideForm } = formSlice.actions;
export default formSlice.reducer