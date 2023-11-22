import './App.css'
import { Header } from './components/Header'
import desktop from '/desktop_tutorics.svg'

function App() {
  return (
    <>
      <div>
        <Header/>
      </div>
      <img src={desktop} className="desktop_image" alt="desktop_image" />
      <h3 className='h3'><a className='point'>tutorics</a> coming soon</h3>
    </>
  )
}

export default App
