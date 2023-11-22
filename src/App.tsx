import './App.css'
import logo from './assets/tutorics.svg'
import desktop from '/desktop_tutorics.svg'

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
