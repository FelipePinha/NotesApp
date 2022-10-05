import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    formActive: false
}

export const formToggleSlice = createSlice({
    name: 'formActive',
    initialState: initialState,
    reducers: {
        formToggle: (state, { payload }) => {
            return {...state, formActive: payload}
        }
    }
})

export const selectFormActive = state => state.formActive

export const { formToggle } = formToggleSlice.actions
export default formToggleSlice.reducer