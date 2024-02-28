import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import './style/index.scss'
import { MyContextComponent } from './context/MyContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyContextComponent>
      <App />
    </MyContextComponent>
  </React.StrictMode>
)
