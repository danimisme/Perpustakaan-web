import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './features/bookSlice'
import formAddReducer from './features/formAddSlice'
import modalDeleteReducer from './features/modalDeleteSlice'
import formEditReducer from './features/formEditSlice'

export const store = configureStore({
  reducer: {
    book: bookReducer,
    formAdd: formAddReducer,
    modalDelete: modalDeleteReducer,
    formEdit: formEditReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch