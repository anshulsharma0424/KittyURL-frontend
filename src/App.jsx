import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage'
import AboutPage from './components/AboutPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<LandingPage />}></Route>
          <Route path='/about' element = {<AboutPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
