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
        deleteBook: (state,action) => {
            state.books = state.books.filter((book) => book.id !== action.payload)
        }
    },
})

export const { addBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer