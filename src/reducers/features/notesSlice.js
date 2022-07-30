import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const notesSlice = createSlice({
    name: 'notes',
    initialState: initialState,
    reducers: {
        addNote: (state, { payload }) => {
            [...state, payload]
        }
    }
})

export const selectNotes = state => state.notes

export const { addNote } = notesSlice.actions
export default notesSlice.reducer

