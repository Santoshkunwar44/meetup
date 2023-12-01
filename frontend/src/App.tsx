import './App.css'
import {Routes,Route, Outlet, Navigate} from "react-router-dom"
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
import {Toaster} from "react-hot-toast"
import DisplayInfo from './pages/Auth/DisplayInfo/DisplayInfo'
import InfoOutlet from './component/Outlets/InfoOutlet/InfoOutlet'

function App() {
  return (
    <>
    <Toaster/>
      <Routes>
        <Route  element={<ProtectedRoutes/>}>

            <Route path='/' element={<Navigate to={"/chat"}/>}/>
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
      </Route>
          <Route path='/auth' element={<AuthOutlet/>}>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='verify_email' element={<VerifyEmail/>}/>
            <Route path='reset_password' element={<ResetPassword/>}/>
          </Route>
            <Route path='/info' element={<InfoOutlet/>}>
            <Route path='verify_email_sent' element={<DisplayInfo/>}/>

            
          </Route>
      </Routes>
    </>
  )
}

export default App;

const ProtectedRoutes =()=>{

  let user = true;

  return user ? <Outlet/> :<Navigate to={"/auth/login"}/>

}
