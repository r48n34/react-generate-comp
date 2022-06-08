import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    data: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addItem(state, action) {
            state.data.push(action.payload);
        },
    }
})

export const { addItem } = todoSlice.actions
export default todoSlice.reducer
