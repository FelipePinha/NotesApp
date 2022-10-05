import { configureStore } from '@reduxjs/toolkit'
import notesReducer from './features/notesSlice'
import highlightReducer from './features/highlightSlice'
import formToggleReducer from './features/formToggleSlice'

export default configureStore({
    reducer: {
        notes: notesReducer,
        highlight: highlightReducer,
        formActive: formToggleReducer
    }
})