import booksData from "../../data/books.json";
import { Book } from "../../models/Book";
import { createSlice } from "@reduxjs/toolkit";



const initialState : { books: Book[] } = {
    books: booksData,
};

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
    },
})

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer