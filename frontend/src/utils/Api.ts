import axios, { Axios } from "axios";

export const AxiosInstance=axios.create({
    baseURL:"http://localhost:8000/api",
    withCredentials:true
})

type MessagePayloadType={
    senderId:string,
    text:string,
    chatId:string
}
type NewMessagePayloadType={
    text:string,
    users:string[],
    senderId:string
}
type followNotificationPayloadType={
    to:string,
    from:string,
    type:string
}
// user endpoints
export const fetchUserByIdApi=(userId:string)=>AxiosInstance.get(`/user/search?userId=${userId}`)
export const searchUserByUsernameApi=(username:string)=>AxiosInstance.get(`/user/search?search_query=${username}`)
export const followUserApi=(userId:string,nextUserId:string,payload:followNotificationPayloadType)=>AxiosInstance.post(`/user/follow?userId=${userId}&nextUserId=${nextUserId}`,payload)
export const unFollowUserApi=(userId:string,nextUserId:string)=>AxiosInstance.post(`/user/unfollow?userId=${userId}&nextUserId=${nextUserId}`)
export const getSuggestedPeopleApi=(userId:string)=>AxiosInstance.get(`/user/suggestion/${userId}`);
export const getSessionUserApi=()=>AxiosInstance.get('/user/loggedInUser')

// chats endpoints 
export const fetchChatsOfUserApi =(userId:string)=>AxiosInstance.get(`/chat/${userId}`)
export const fetchChatsOfBothUsersApi =(user1:string,user2:string)=>AxiosInstance.get(`/chat/byUsersId/${user1}/${user2}`)
export const deleteChatApi=(chatId:string)=>AxiosInstance.delete(`/chat/${chatId}`);

// auth endpoints 
export const emailConfirmationApi=(token:string)=>AxiosInstance.post(`/auth/email_confirmation/${token}`)
export const loginApi=(payload:{email:string,password:string})=>AxiosInstance.post(`/auth/login`,payload)
export const sentEmailToVerifyAccountApi=(email:string)=>AxiosInstance.post("/auth/sent_verification_link",{email})
export const sentEmailToResetPasswordApi=(email:string)=>AxiosInstance.post("/auth/sent_emai_reset_password",{email})
export const  resetPasswordApi=(password:string,token:string)=>AxiosInstance.post("/auth/reset_password",{password,token})
export const registerApi=(payload:{email:string,firstName:string,lastName:string,password:string})=>AxiosInstance.post(`/auth/register`,payload)



// message endpoint 
export const fetchMessagesFromChatApi=(chatId:string)=>AxiosInstance.get(`/message?chatId=${chatId}`)
export const createMessageApi=(payload:MessagePayloadType)=>AxiosInstance.post(`/message/create`,payload)
export const createNewMessageApi=(payload:NewMessagePayloadType)=>AxiosInstance.post(`/message/new_message`,payload)

//notifications endpoint
export const getNotificationOfUserApi=(userId:string)=>AxiosInstance.get(`/notification/${userId}`)
export const getUserStatsApi=(userId:string)=>AxiosInstance.get(`/other/userStats/${userId}`)

