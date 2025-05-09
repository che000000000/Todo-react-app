import { useState } from 'react'
import styles from './InputForm.module.css'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../store/todoSlice'

const InputForm = () => {
  const dispatch = useDispatch()
  const [enteredText, setEnteredText] = useState('')

  const handleAddTodo = (enteredText) => {
    if (enteredText.trim() === '') return
    dispatch(addTodo(enteredText))
    setEnteredText('')
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input_todo_text}
        value={enteredText}
        onChange={(e) => setEnteredText(e.target.value)}
      />
      <button
        className={styles.create_todo_btn}
        onClick={() => handleAddTodo(enteredText)}
      >Add todo</button>
    </div>
  )
}

export default InputForm