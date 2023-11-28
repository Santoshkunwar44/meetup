import './App.css'
import {Routes,Route} from "react-router-dom"
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <Routes>
          <Route path='/auth/login' element={<Login/>}  />
          <Route path='/auth/register' element={<Register/>}/>
          <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
