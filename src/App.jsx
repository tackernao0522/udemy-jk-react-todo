import { useState } from 'react'
import './App.css'
import { CompleteTodos } from './components/CompleteTodos'
import { IncompleteTodos } from './components/IncompleteTodos'
import { InputTodo } from './components/InputTodo'

export const App = () => {
  const [todoText, setTodoText] = useState('')
  const [incompleteTods, setIncompleteTodos] = useState([])
  const [completeTodos, setCompleteTodos] = useState([])

  const onChangeTodoText = (event) => setTodoText(event.target.value)

  const onClickAdd = () => {
    // alert(todoText)
    if (todoText === '') return
    const newTodos = [...incompleteTods, todoText]
    setIncompleteTodos(newTodos)
    setTodoText('')
  }

  const onClickDelete = (index) => {
    // alert('削除!')
    // alert(index)
    const newTodos = [...incompleteTods]
    newTodos.splice(index, 1)
    setIncompleteTodos(newTodos)
  }

  const onClickComplete = (index) => {
    // alert(index)
    const newInCompleteTodos = [...incompleteTods]
    newInCompleteTodos.splice(index, 1)

    const newCompleteTodos = [...completeTodos, incompleteTods[index]]
    setIncompleteTodos(newInCompleteTodos)
    setCompleteTodos(newCompleteTodos)
  }

  const onClickBack = (index) => {
    // alert(index)
    const newCompleteTodos = [...completeTodos]
    newCompleteTodos.splice(index, 1)

    const newIncompleteTodos = [...incompleteTods, completeTodos[index]]
    setCompleteTodos(newCompleteTodos)
    setIncompleteTodos(newIncompleteTodos)
  }

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTods.length >= 5}
      />
      {incompleteTods.length >= 5 && (
        <p style={{ color: 'red' }}>
          登録できるtodoは5個までです。完了するか削除してください。
        </p>
      )}
      <IncompleteTodos
        todos={incompleteTods}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  )
}
