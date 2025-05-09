import React from 'react'
import styles from './TodoItem.module.css'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodoComplete } from '../../store/todoSlice'

const TodoItem = (props) => {
    const dispatch = useDispatch()

    const handleTodoComplete = (todoId) => {
        dispatch(toggleTodoComplete(todoId))
    } 
    
    const handleRemoveTodo = (todoId) => {
        dispatch(removeTodo(todoId))
    }

    return (
        <li key={props.todoId} className={styles.container}>
            <input
                onChange={() => handleTodoComplete(props.todoId)}
                type='checkbox'>
            </input>
            <div className={props.isCompleted ? styles.todo_is_completed : 0}>{props.todoText}</div>
            <span
                className={styles.delete_todo}
                onClick={() => handleRemoveTodo(props.todoId)}
            >&times;</span>
        </li>
    )
}

export default TodoItem