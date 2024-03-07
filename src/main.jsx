import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'mobx-react'
import App from './components/App/App'
import './style/index.scss'
import WordsStore from './store/WordsStore'

export const stores = {
  wordsStore: new WordsStore()
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider {...stores}>
      <App />
    </Provider>
  </React.StrictMode>
)
