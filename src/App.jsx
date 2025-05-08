import { useState } from 'react'
import styles from './App.module.css'

function App() {

  const [todos, setTodos] = useState([])
  const [enteredText, setEnteredText] = useState('')

  const createTodo = (enteredText) => {
    if (enteredText.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          todoText: enteredText,
          isCompleted: false
        }
      ])
      setEnteredText('')
    }
  }

  const deleteTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

  const toggleTodoComplete = (todoId) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id !== todoId) return todo 
      return {
        ...todo,
        isCompleted: !todo.isCompleted
      }
    })
    setTodos(updatedTodos)
  }

  return (
    <div className={styles.app}>
      <h2>TODO LIST</h2>
      <ul className={styles.todo_list}>
        {
          todos.map(todo => {
            return (
              <li key={todo.id} className={styles.todo_item}>
                <input
                  onChange={() => toggleTodoComplete(todo.id)}
                  type='checkbox'>
                </input>
                <div className={todo.isCompleted ? styles.todo_is_completed : 0}>{todo.todoText}</div>
                <span
                  className={styles.delete_todo}
                  onClick={() => deleteTodo(todo.id)}
                >&times;</span>
              </li>
            )
          })
        }
      </ul>
      <div className={styles.create_todo_form}>
        <input
          className={styles.input_todo_text}
          value={enteredText}
          onChange={(e) => setEnteredText(e.target.value)}
        />
        <button
          className={styles.create_todo_btn}
          onClick={() => createTodo(enteredText)}
        >Create todo</button>
      </div>
    </div>
  )
}

export default App