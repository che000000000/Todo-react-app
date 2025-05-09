import styles from './TodoList.module.css'
import TodoItem from '../TodoItem/TodoItem'
import {useSelector} from 'react-redux'

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos)

    return (
        <ul className={styles.container}>
            {todos.map(todo => {
                return (
                    <TodoItem
                        key={todo.id}
                        todoId={todo.id}
                        isCompleted={todo.isCompleted}
                        todoText={todo.todoText}
                    />
                )
            })}
        </ul>
    )
}

export default TodoList