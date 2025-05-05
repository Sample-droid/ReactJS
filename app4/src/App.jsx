import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Add from './Components/Add'
import View from './Components/View'

import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Routes>
    <Route path="/" element={<Navbar/>}/>
      <Route path="/Add" element={<Add/>}/>
      <Route path="/View" element={<View/>}/>
    </Routes>
     {/* <Navbar/>
     <Add/>
     <View/> */}
    
    </>
  )
}

export default App
