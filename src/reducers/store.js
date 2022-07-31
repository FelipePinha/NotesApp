import { configureStore } from '@reduxjs/toolkit'
import notesReducer from './features/notesSlice'
import highlightReducer from './features/highlightSlice'

export default configureStore({
    reducer: {
        notes: notesReducer,
        highlight: highlightReducer
    }
})