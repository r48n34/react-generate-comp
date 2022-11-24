// TodoSlice.tsx
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface TodoState { 
    data: any[] 
}

const initialState:TodoState = {
    data: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addItem(state:TodoState, action:PayloadAction<number>) {
            state.data.push(action.payload);
        },
    }
})

export const { addItem } = todoSlice.actions
export default todoSlice.reducer