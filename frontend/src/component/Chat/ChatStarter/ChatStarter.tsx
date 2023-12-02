import { Link } from "react-router-dom"
import { ChatStarterWrapper } from "./ChatStarter.styles"
import { useSelector } from "react-redux"
import { State } from "../../../redux/reducers"

const ChatStarter = () => {
  const {user} =useSelector((state:State)=>state.user)
  return (
    <ChatStarterWrapper>
       <div className="content">
        <img src="/starter.png" />
        <h1 className="starterText">Start Chatting with your loved ones !</h1>
       <Link to={`/users/${user?._id}`}>
        <button className="findButton">Find more friends .</button>
       </Link>
       </div>
    </ChatStarterWrapper>
  )
}

export default ChatStarter