import { useState } from 'react'
import './App.css'

export const App = () => {
  const [todoText, setTodoText] = useState('')
  const [incompleteTods, setIncompleteTodos] = useState([
    'ああああ',
    'いいいいい',
  ])
  const [completeTodos, setCompleteTodos] = useState(['ううううう'])

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

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTods.map((todo, index) => (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          ))}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button>戻す</button>
            </div>
          ))}
        </ul>
      </div>
    </>
  )
}
