import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    highlight: false
}

export const highlightSlice = createSlice({
    name: 'highlight',
    initialState: initialState,
    reducers: {
        setHighlight: (state) => {
            return !state
        } 
    }
})

export const selectHighlight = state => state.highlight

export const {setHighlight} = highlightSlice.actions
export default highlightSlice.reducer
