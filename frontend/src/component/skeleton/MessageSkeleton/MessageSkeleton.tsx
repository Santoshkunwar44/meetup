import { Skeleton } from "@chakra-ui/react"
import { MessageSkeletonWrapper } from "./Message.styles"

const MessageSkeleton = () => {
  return (
    <MessageSkeletonWrapper >

       <Skeleton className="messageItem"  width={"200px"} height={"40px"} startColor='#30336b64' endColor='#535c6826' />
       <Skeleton className="messageItem"   width={"160px"}  height={"70px"} startColor='#30336b64' endColor='#535c6826' />
       <Skeleton alignSelf={"flex-end"}  className="messageItem"  width={"150px"} height={"40px"} startColor='#30336b64' endColor='#535c6826' />
       <Skeleton alignSelf={"flex-end"}  className="messageItem"  width={"400px"} height={"50px"} startColor='#30336b64' endColor='#535c6826' />
       <Skeleton className="messageItem"  width={'450px'} height={"100px"} startColor='#30336b64' endColor='#535c6826' />
       <Skeleton  alignSelf={"flex-end"}  className="messageItem" width={"300px"}  height={"70px"} startColor='#30336b64' endColor='#535c6826' />
       <Skeleton className="messageItem"  width={"250px"} height={"40px"} startColor='#30336b64' endColor='#535c6826' />
       <Skeleton className="messageItem"   width={"160px"}  height={"70px"} startColor='#30336b64' endColor='#535c6826' />
       <Skeleton alignSelf={"flex-end"}  className="messageItem"  width={"150px"} height={"40px"} startColor='#30336b64' endColor='#535c6826' />
       <Skeleton alignSelf={"flex-end"}  className="messageItem"  width={"200px"} height={"40px"} startColor='#30336b64' endColor='#535c6826' />
       <Skeleton className="messageItem"  width={'250px'} height={"150px"} startColor='#30336b64' endColor='#535c6826' />
       <Skeleton  alignSelf={"flex-end"}  className="messageItem" width={"300px"}  height={"80px"} startColor='#30336b64' endColor='#535c6826' />

    </MessageSkeletonWrapper>
  )
}

export default MessageSkeleton