
export type UserType={
    _id:string,
    firstName:string,
    lastName:string,
    email:string,
    image:string,
    createdAt:string,
    updatedAt:string,
    followers:UserType[],
    followings:UserType[],
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
export type onlineUsersType={
    socketId:string,
    userId:string
}

export type PostType={
    _id:string,
    text:string,
    image:string,
    user:UserType,
    createdAt:string,
    updatedAt:string,
}
export  type NotificationType={
    _id:string,
    text:string;
    createdAt:string,
    updatedAt:string,
    to:string,
    from:UserType,
    type:"FOLLOW"|"COMMENT"|"LIKE"|"FOLLOW_BACK"
    post:PostType
}
