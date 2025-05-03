import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import StateBasics from './components/StateBasics'
import Counter1 from './components/Counter1'
import Ndisp from './components/Ndisp'
import { Route, Routes } from 'react-router-dom'
import Api from './components/Api'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Counter1/>}/>
        <Route path='/Ndisp' element={<Ndisp/>}/>
        <Route path='/STB' element={<StateBasics/>}/>
        <Route path='/Api' element={<Api/>}/>
      </Routes>
      {/* <Api/> */}
      {/* <Ndisp/>
      <Counter1/>
     <StateBasics/>
     */}
      

    </>
  )
}

export default App
