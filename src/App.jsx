import styles from './App.module.css'
import TodoList from './components/TodoList/TodoList'
import InputForm from './components/InputForm/InputForm'

function App() {
  return (
    <div className={styles.app}>
      <h2>TODO LIST</h2>
      <TodoList />
      <InputForm />
    </div>
  )
}

export default App