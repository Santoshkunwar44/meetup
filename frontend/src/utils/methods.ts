import { UserType } from "./Types";

export const getAnotherUserMethod=(users:UserType[],myId:string):UserType|undefined=>  users.find(user=>user._id !== myId)

