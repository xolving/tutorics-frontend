import { useState } from 'react'
import './App.css'
import logo from './assets/tutorics.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://xolving.com" target="_blank">
          <img src={logo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>tutorics 개발 예정</h1>
    </>
  )
}

export default App
