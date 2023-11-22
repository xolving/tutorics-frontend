import desktop from '../public/desktop_tutorics.svg'
import './App.css'
import logo from './assets/tutorics.svg'

function App() {
  return (
    <>
      <div>
        <a href="https://xolving.com" target="_blank">
          <img src={logo} className="logo" alt="xolving logo" />
        </a>
      </div>
      <h1>tutorics 개발 예정</h1>
      <img src={desktop} className="desktop_image" alt="desktop_image" />
    </>
  )
}

export default App
