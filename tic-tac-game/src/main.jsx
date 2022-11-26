import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './styles/index.css'
import './styles/App.css'
import Board from './components/Board'
import Game from './components/Game'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Board />
    <Game />
  </React.StrictMode>
)
