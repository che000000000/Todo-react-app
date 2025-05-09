import React from 'react'
import styles from './TodoList.module.css'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = (props) => {
    return (
        <ul className={styles.container}>
            {props.todos.map(todo => {
                return (
                    <TodoItem
                        key={todo.id}
                        todoId={todo.id}
                        isCompleted={todo.isCompleted}
                        todoText={todo.todoText}
                        toggleTodoComplete={props.toggleTodoComplete}
                        deleteTodo={props.deleteTodo}
                    />
                )
            })}
        </ul>
    )
}

export default TodoList