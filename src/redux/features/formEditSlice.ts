import { createSlice } from "@reduxjs/toolkit";
import { Book } from "../../models/Book";

const initialState : { isShow: boolean , book : Book} = {
    isShow : false,
    book : {} as Book
}

export const formEditSlice = createSlice({
    name : "formEdit",
    initialState,
    reducers : {
        showForm : (state, action) => {
            state.isShow = true;
            state.book = action.payload
        },
        hideForm : (state) => {
            state.isShow = false;
            state.book = {} as Book
        }
    }
})

export const { showForm, hideForm } = formEditSlice.actions;
export default formEditSlice.reducer