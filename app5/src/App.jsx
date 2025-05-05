import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Add from './Components/Add'
import { Route, Routes } from 'react-router-dom'
import View from './Components/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Navbar/>}/>
        <Route path='/Add' element={<Add/>}/>
        <Route path='/View' element={<View/>}/>
        </Routes>
       
    </>
  )
}

export default App
