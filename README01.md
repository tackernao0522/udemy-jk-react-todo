## 50 Create React App

バージョン指定の方法 https://qiita.com/hayato94087/items/5c586e80bfa18b1c537a <br>

- `$ npx create-react-app udemy-react-todo`を実行<br>

* `$ cd udemy-react-todo`を実行<br>

- `$ rm -rf node_modules && rm -rf package-lock.json`を実行<br>

* `package.json`を編集<br>

```json:package.json
{
  "name": "udemy-react-todo",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": ["react-app", "react-app/jest"]
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

- `$ npm install`を実行<br>

* `mv src/App.js src/App.jsx`を実行<br>

- `src/App.jsx`を編集<br>

```jsx:App.jsx
import './App.css'

export const App = () => {
  return <div></div>
}
```

- `src/App.css`の中身を消す<br>

* `src/index.js`を編集<br>

```js:index.js
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import './index.css'

ReactDOM.render(<App />, document.getElementById('root'))
```

## 51 JSX で構造を作成

- `src/App.jsx`を編集<br>

```jsx:App.jsx
import './App.css'

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <div>
            <li>ああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div>
            <li>いいいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div>
        <p>完了のTODO</p>
        <ul>
          <div>
            <li>うううう</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  )
}
```

## 52 CSS でスタイリング

- `src/App.css`を編集<br>

```css:App.css
body {
  font-family: sans-serif;
}

input {
  border-radius: 16px;
  border: none;
  padding: 6px 16px;
  outline: none;
}

button {
  border-radius: 16px;
  border: none;
  padding: 4px 16px;
}

button:hover {
  background-color: #ff7fff;
  color: #fff;
  cursor: pointer;
}

li {
  margin-right: 8px;
}

.input-area {
  background-color: #c1ffff;
  width: 400px;
  height: 30px;
  border-radius: 8px;
  padding: 8px;
  margin: 8px;
}

.incomplete-area {
  background-color: #c6ffe2;
  width: 400px;
  min-height: 200px;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
}

.complete-area {
  background-color: #ffffe0;
  width: 400px;
  min-height: 200px;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
}

.title {
  text-align: center;
  margin-top: 0;
  font-weight: bold;
  color: #666;
}

.list-row {
  display: flex;
  align-items: center;
  padding-bottom: 4px;
}
```

- `src/index.js`を編集<br>

```js:index.js
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

ReactDOM.render(<App />, document.getElementById('root'))
```

- `src/App.jsx`を編集<br>

```jsx:App.jsx
import './App.css'

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>ああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>いいいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>うううう</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  )
}
```

## 53 React での実装を意識したモックに変更<br>

- `src/App.jsx`を編集<br>

```jsx:App.jsx
import { useState } from 'react'
import './App.css'

export const App = () => {
  // 追加
  const [incompleteTods, setIncompleteTodos] = useState([
    'ああああ',
    'いいいいい',
  ])
  const [completeTodos, setCompleteTodos] = useState(['ううううう'])
  // ここまで
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          // ここから編集
          {incompleteTods.map((todo) => (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button>完了</button>
              <button>削除</button>
            </div>
          ))}
          // ここまで
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          // ここから編集
          {completeTodos.map((todo) => (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button>戻す</button>
            </div>
          ))}
          // ここまで
        </ul>
      </div>
    </>
  )
}
```

## 54 タスクの追加機能

- `src/App.jsx`を編集<br>

```jsx:App.jsx
import { useState } from 'react'
import './App.css'

export const App = () => {
  const [todoText, setTodoText] = useState('')
  const [incompleteTods, setIncompleteTodos] = useState([
    'ああああ',
    'いいいいい',
  ])
  const [completeTodos, setCompleteTodos] = useState(['ううううう'])

  // 追加
  const onChangeTodoText = (event) => setTodoText(event.target.value)

  const onClickAdd = () => {
    // alert(todoText)
    if (todoText === '') return
    const newTodos = [...incompleteTods, todoText]
    setIncompleteTodos(newTodos)
    setTodoText('')
  }
  // ここまで

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          // 追加
          value={todoText}
          onChange={onChangeTodoText}
          // ここまで
        />
        // 編集
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTods.map((todo) => (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button>完了</button>
              <button>削除</button>
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
```

## 55 タスクの削除機能

- `src/App.jsx`を編集<br>

```jsx:App.jsx
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

  // 追加
  const onClickDelete = (index) => {
    // alert('削除!')
    // alert(index)
    const newTodos = [...incompleteTods]
    newTodos.splice(index, 1)
    setIncompleteTodos(newTodos)
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
              <button>完了</button>
              // 編集
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
```

## 56 タスクの完了機能

- `src/App.jsx`を編集<br>

```jsx:App.jsx
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

  // 追加
  const onClickComplete = (index) => {
    // alert(index)
    const newInCompleteTodos = [...incompleteTods]
    newInCompleteTodos.splice(index, 1)

    const newCompleteTodos = [...completeTodos, incompleteTods[index]]
    setIncompleteTodos(newInCompleteTodos)
    setCompleteTodos(newCompleteTodos)
  }
  // ここまで

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
```
