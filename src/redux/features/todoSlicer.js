import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
}

export const todoSlicer = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodo: (state, { payload }) => {
            return [...state, payload]
        },
        deleteTodo: (state, { payload }) => {
            const newArr = state.filter(s => s.id !== payload)
            return newArr;
        },
        completeTodo: (state, { payload }) => {
            const completedTask = state.map((todo) => {
                if (todo.id === payload) {
                    return { ...todo, isComplete: !todo.isComplete };
                } else {
                    return todo;
                }
            })
            return completedTask;
        },
        removeAll: (state) => {
            return state = []
        }
    }
})



export const { addTodo, deleteTodo, completeTodo, removeAll } = todoSlicer.actions
export default todoSlicer.reducer