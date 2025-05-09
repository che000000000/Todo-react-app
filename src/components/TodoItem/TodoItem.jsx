import React from 'react'
import styles from './TodoItem.module.css'

const TodoItem = (props) => {
    return (
        <li key={props.todoId} className={styles.container}>
            <input
                onChange={() => props.toggleTodoComplete(props.todoId)}
                type='checkbox'>
            </input>
            <div className={props.isCompleted ? styles.todo_is_completed : 0}>{props.todoText}</div>
            <span
                className={styles.delete_todo}
                onClick={() => props.deleteTodo(props.todoId)}
            >&times;</span>
        </li>
    )
}

export default TodoItem