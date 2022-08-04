import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    highlight: false,
    highlightedNote: {
        title: '',
        content: ''
    }
}

export const highlightSlice = createSlice({
    name: 'highlight',
    initialState: initialState,
    reducers: {
        setHighlight: (state, { payload }) => {
            return {...state, highlight: payload}
        },
        setHighlightedNote: (state, { payload }) => {
            return {...state, highlightedNote: payload}
        }
    }
})

export const selectHighlight = state => state.highlight

export const {setHighlight, setHighlightedNote} = highlightSlice.actions
export default highlightSlice.reducer
