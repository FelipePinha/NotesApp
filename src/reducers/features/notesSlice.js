import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const notesSlice = createSlice({
    name: 'notes',
    initialState: initialState,
    reducers: {
        addNote: (state, { payload }) => {
            return [...state, payload]
        },
        deleteNote: (state, { payload }) => {
            // console.log(payload)
            return [...state.filter(note => note.id !== payload)]
        }
    }
})

export const selectNotes = state => state.notes

export const { addNote, deleteNote } = notesSlice.actions
export default notesSlice.reducer

