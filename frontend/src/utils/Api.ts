import axios from "axios";

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
// user endpoints

export const fetchUserByIdApi=(userId:string)=>AxiosInstance.get(`/user/search?userId=${userId}`)
export const searchUserByUsernameApi=(username:string)=>AxiosInstance.get(`/user/search?search_query=${username}`)

// chats endpoints 

export const fetchChatsOfUserApi =(userId:string)=>AxiosInstance.get(`/chat/${userId}`)
export const fetchChatsOfBothUsersApi =(user1:string,user2:string)=>AxiosInstance.get(`/chat/byUsersId/${user1}/${user2}`)

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

