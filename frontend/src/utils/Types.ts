

export type UserType={
    _id:string,
    firstName:string,
    lastName:string,
    image:string,
    createdAt:string,
    updatedAt:string,
}
export type ChatType={
    _id:string,
    name:string,
    isGroup:boolean,
    users:UserType[],
    latestMessage:MessageType,
    createdAt:string,
    updatedAt:string,
}
export type MessageType={
    senderId:UserType,
    chat:ChatType,
    text:string,
    createdAt:string,
    updatedAt:string,
}