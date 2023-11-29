import './App.css'
import {Routes,Route} from "react-router-dom"
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import ChatOutlet from './component/Chat/ChatOutlet/ChatOutlet'
import ChatStarter from './component/Chat/ChatStarter/ChatStarter'
import ChatRoom from './component/Chat/ChatRoom/ChatRoom'


function App() {
  return (
    <>
      <Routes>
          <Route path='/auth/login' element={<Login/>}  />
          <Route path='/auth/register' element={<Register/>}/>
          <Route path='/' element={<ChatOutlet/>}>
          <Route path='chat' element={<ChatStarter/>}/>
          <Route path='chat/:id' element={<ChatRoom/>}/>
          </Route>
      </Routes>
    </>
  )
}

export default App
