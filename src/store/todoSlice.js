import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: []
    },

    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                todoText: action.payload.enteredText,
                isCompleted: false
            })
        },

        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.todoId)
        },

        toggleTodoComplete(state, action) {
            const findedTodo = state.todos.find(todo => todo.id === action.payload.todoId)
            findedTodo.isCompleted = !findedTodo.isCompleted
        }
    }
})

export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions

export default todoSlice.reducer