import { Skeleton } from "@chakra-ui/react"
import { UserSkeletonWrapper } from "../Skeleton.styles"

const UserSkeleton = () => {
  return <>
  <UserSkeletonWrapper>
    <Skeleton className="skeleton"  height={"70px"} startColor='#30336b64' endColor='#535c6826' />
    <Skeleton className="skeleton"  height={"70px"} startColor='#30336b64' endColor='#535c6826' />
    <Skeleton className="skeleton"  height={"70px"} startColor='#30336b64' endColor='#535c6826' />
    <Skeleton className="skeleton"  height={"70px"} startColor='#30336b64' endColor='#535c6826' />
    <Skeleton className="skeleton"  height={"70px"} startColor='#30336b64' endColor='#535c6826' />
    <Skeleton className="skeleton"  height={"70px"} startColor='#30336b64' endColor='#535c6826' />
  
  </UserSkeletonWrapper>
  </>
}

export default UserSkeleton