import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: [
        {
            id: 1,
            text: 'Todo 1',
            completed: false
        }
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push({
                id: Date.now(),
                text: action.payload,
                completed: false,
            });
        },
        completeTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload);
            if(todo) {
                todo.completed = !todo.completed
            }
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        }
    }
});

export const { addTodo, completeTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer