import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './features/bookSlice'
import formReducer from './features/formSlice'
import modalDeleteReducer from './features/modalDeleteSlice'

export const store = configureStore({
  reducer: {
    book: bookReducer,
    form: formReducer,
    modalDelete: modalDeleteReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch