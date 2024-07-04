import { createSlice } from "@reduxjs/toolkit";
import { Book } from "../../models/Book";

const initialState : { isShow: boolean , book : Book} = {
    isShow: false,
    book : {} as Book,
};

export const modalDeleteSlice = createSlice({
    name: "modalDelete",
    initialState,
    reducers: {
        showDeleteModal: (state, action) => {
            state.isShow = true;
            state.book = action.payload
        },
        hideDeleteModal: (state) => {
            state.isShow = false;
            state.book = {} as Book
        },
    },
})


export const { showDeleteModal, hideDeleteModal } = modalDeleteSlice.actions;
export default modalDeleteSlice.reducer;