import { useState } from 'react'
import styles from './App.module.css'
import TodoList from './components/TodoList/TodoList'
import InputForm from './components/InputForm/InputForm'

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
      <TodoList
        todos={todos}
        toggleTodoComplete={toggleTodoComplete}
        deleteTodo={deleteTodo}
      />
      <InputForm 
        enteredText={enteredText}
        setEnteredText={setEnteredText}
        createTodo={createTodo}
      />
    </div>
  )
}

export default App