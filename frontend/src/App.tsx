import './App.css'
import {Routes,Route} from "react-router-dom"
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import ChatOutlet from './component/Chat/ChatOutlet/ChatOutlet'
import ChatStarter from './component/Chat/ChatStarter/ChatStarter'
import ChatRoom from './component/Chat/ChatRoom/ChatRoom'
import FriendsOutlet from './component/Friends/FriendsOutlet/FriendsOutlet'
import AllFriends from './component/Friends/AllFriends/AllFriends'
import Followings from './component/Friends/Following/Followings'
import Chatsetting from './component/Chat/Setting/Chatsetting'
import SettingOutlet from './component/Chat/SettingOutlet/SettingOutlet'
import AuthOutlet from './component/Outlets/AuthOutlet/AuthOutlet'
import VerifyEmail from './pages/Auth/VerifyEmail/VerifyEmail'
import ResetPassword from './pages/Auth/ResetPassword/ResetPassword'

function App() {
  return (
    <>
      <Routes>
        
          <Route path='/users' element={<FriendsOutlet/>}>
            <Route path='' element={<AllFriends/>}/>
            <Route path='followings' element={<Followings/>}/>
          </Route>
          <Route path='/chat' element={<ChatOutlet/>}>
          <Route path='' element={<ChatStarter/>}/>
          <Route path=':id' element={<SettingOutlet/>}>
            <Route path='' element={<ChatRoom/>} />
            <Route path='setting'  element={<Chatsetting/>}/>
          </Route>
          </Route>
          <Route path='/auth' element={<AuthOutlet/>}>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='verify_email' element={<VerifyEmail/>}/>
            <Route path='reset_password' element={<ResetPassword/>}/>
          </Route>
      </Routes>
    </>
  )
}

export default App
