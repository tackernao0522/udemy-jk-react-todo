## 58 改善 コンポーネント化

- `mkdir src/components && touch $_/InputTodo.jsx`を実行<br>

* `src/components/InputTodo.jsx`を編集<br>

```jsx:InputTodo.jsx
export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props
  return (
    <div className="input-area">
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  )
}
```

- `src/App.jsx`を編集<br>

```jsx:App.jsx
import { useState } from 'react'
import './App.css'
import { InputTodo } from './componetns/InputTodo'

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
      // 編集
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
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
          {completeTodos.map((todo, index) => (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          ))}
        </ul>
      </div>
    </>
  )
}
```

- `$ touch src/components/IncompleteTodos.jsx`を実行<br>

* `src/components/IncompleteTodos.jsx`を編集<br>

```jsx:IncompleteTodos.jsx
export const IncompleteTodos = () => {
  return (
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
  )
}
```

- `src/App.jsx`を編集<br>

```jsx:App.jsx
import { useState } from 'react'
import './App.css'
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
      />
      // 編集
      <IncompleteTodos
        todos={incompleteTods}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      // ここまで
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          ))}
        </ul>
      </div>
    </>
  )
}
```

- src/components/IncompleteTodos.jsx`を編集<br>

```jsx:IncompleteTodos.jsx
// 編集
export const IncompleteTodos = (props) => {
  // 追加
  const { todos, onClickComplete, onClickDelete } = props
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        // 編集
        {todos.map((todo, index) => (
          <div key={todo} className="list-row">
            <li>{todo}</li>
            <button onClick={() => onClickComplete(index)}>完了</button>
            <button onClick={() => onClickDelete(index)}>削除</button>
          </div>
        ))}
      </ul>
    </div>
  )
}
```

- `$ touch src/components/CompleteTodos.jsx`を実行<br>

* `src/components/CompleteTodos.jsx`を実行<br>

```jsx:Complete.jsx
export const CompleteTodos = () => {
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {completeTodos.map((todo, index) => (
          <div key={todo} className="list-row">
            <li>{todo}</li>
            <button onClick={() => onClickBack(index)}>戻す</button>
          </div>
        ))}
      </ul>
    </div>
  )
}
```

- `src/App.jsx`を編集<br>

```jsx:App.jsx
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
      />
      <IncompleteTodos
        todos={incompleteTods}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      // 編集
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  )
}
```

- `src/components/CompleteTodos.jsx`を編集<br>

```jsx:CompleteTodos.jsx
export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => (
          <div key={todo} className="list-row">
            <li>{todo}</li>
            <button onClick={() => onClickBack(index)}>戻す</button>
          </div>
        ))}
      </ul>
    </div>
  )
}
```

## 59 改善(CSS-in-JS)

- `src/components/InputTodo.jsx`を編集<br>

```jsx:InputTodo.jsx
// 追加
const style = {
  backgroundColor: '#c1ffff',
  width: '400px',
  height: '30px',
  borderRadius: '8px',
  padding: '8px',
  margin: '8px',
}

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props
  return (
    // 編集
    <div style={style}>
      <input placeholder="TODOを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  )
}
```

## 60 改善 TODO の上限設定

- `src/App.jsx`を編集<br>

```jsx:App.jsx
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
        // 追加
        disabled={incompleteTods.length >= 5}
      />
      // 編集
      {incompleteTods.length >= 5 && (
        <p style={{ color: 'red' }}>
          登録できるtodoは5個までです。完了するか削除してください。
        </p>
      )}
      // ここまで
      <IncompleteTodos
        todos={incompleteTods}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  )
}
```

- `src/components/InputTodo.jsx`を編集<br>

```jsx:InputTodo.jsx
const style = {
  backgroundColor: '#c1ffff',
  width: '400px',
  height: '30px',
  borderRadius: '8px',
  padding: '8px',
  margin: '8px',
}

export const InputTodo = (props) => {
  // 編集
  const { todoText, onChange, onClick, disabled } = props
  return (
    <div style={style}>
      // 編集
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
      // ここまで
    </div>
  )
}
```
