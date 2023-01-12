import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
}

export const todoSlicer = createSlice({
    name: 'todo',
    initialState:[],
    reducers: {
        addTodo: (state, payload) => {
            return [...state, payload]
        },
        deleteTodo:(state,{payload})=>{
            const newArr=state.filter(s=>s.id!==payload.id)
        }
    }
})

export const { addTodo,deleteTodo} = todoSlicer.actions
export default todoSlicer.reducer