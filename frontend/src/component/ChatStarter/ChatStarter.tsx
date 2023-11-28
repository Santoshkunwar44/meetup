import { ChatStarterWrapper } from "./ChatStarter.styles"

const ChatStarter = () => {
  return (
    <ChatStarterWrapper>
       <div className="content">
        <img src="/starter.png" alt=""  />
        <h1 className="starterText">Start Chatting with your loved ones !</h1>
        <button className="findButton">Find more friends .</button>
       </div>
    </ChatStarterWrapper>
  )
}

export default ChatStarter