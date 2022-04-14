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
