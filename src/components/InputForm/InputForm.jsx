import React from 'react'
import styles from './InputForm.module.css'

const InputForm = (props) => {
    return (
        <div className={styles.container}>
        <input
          className={styles.input_todo_text}
          value={props.enteredText}
          onChange={(e) => props.setEnteredText(e.target.value)}
        />
        <button
          className={styles.create_todo_btn}
          onClick={() => props.createTodo(props.enteredText)}
        >Create todo</button>
      </div>
    )
}

export default InputForm