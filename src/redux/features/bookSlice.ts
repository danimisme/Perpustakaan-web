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
        },
        editBook : (state, action) => {
            const booksIndex = state.books.findIndex((book) => book.id === action.payload.id);
            state.books[booksIndex] = action.payload
        }
    },
})

export const { addBook, deleteBook, editBook } = bookSlice.actions;
export default bookSlice.reducer