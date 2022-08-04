import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const notesSlice = createSlice({
    name: 'notes',
    initialState: initialState,
    reducers: {
        addNote: (state, { payload }) => {
            return [...state, payload]
        },
        editNote: (state, { payload }) => {
            state.map(note => {
                if(note.id === payload.id) {
                    note.title = payload.title
                    note.content = payload.content
                }
            })
        },
        deleteNote: (state, { payload }) => {
            return [...state.filter(note => note.id !== payload)]
        }
    }
})

export const selectNotes = state => state.notes

export const { addNote, deleteNote, editNote } = notesSlice.actions
export default notesSlice.reducer

