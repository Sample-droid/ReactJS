import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import MuiTable from './components/MuiTable'
import Muicard from './components/Muicard'

import { Route, Routes } from 'react-router-dom'
import { Login } from '@mui/icons-material'
import LoginMui from './components/LoginMui'
//import LoginMui from './components/LoginMui'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LoginMui/>}/>
        <Route path='/c' element={<Muicard/>}/>
        <Route path='/d' element={<MuiTable/>}/>
      </Routes>
      
        
    </>
  )
}

export default App
