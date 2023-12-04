import { Link } from "react-router-dom"
import { ChatStarterWrapper } from "./ChatStarter.styles"


const ChatStarter = () => {
  return (
    <ChatStarterWrapper>
       <div className="content">
        <img src="/starter.png" />
        <h1 className="starterText">Start Chatting with your loved ones !</h1>
       <Link to={`/users`}>
        <button className="findButton">Find more friends .</button>
       </Link>
       </div>
    </ChatStarterWrapper>
  )
}

export default ChatStarter