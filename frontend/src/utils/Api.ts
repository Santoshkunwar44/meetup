import axios from "axios";

export const AxiosInstance=axios.create({
    baseURL:"http://localhost:8000/api",
    withCredentials:true
})



// auth endpoints 

export const emailConfirmationApi=(token:string)=>AxiosInstance.post(`/auth/email_confirmation/${token}`)
export const loginApi=(payload:{email:string,password:string})=>AxiosInstance.post(`/auth/login`,payload)
export const sentEmailToVerifyAccountApi=(email:string)=>AxiosInstance.post("/auth/sent_verification_link",{email})
export const sentEmailToResetPasswordApi=(email:string)=>AxiosInstance.post("/auth/sent_emai_reset_password",{email})
export const  resetPasswordApi=(password:string,token:string)=>AxiosInstance.post("/auth/reset_password",{password,token})
export const registerApi=(payload:{email:string,username:string,password:string})=>AxiosInstance.post(`/auth/register`,payload)



