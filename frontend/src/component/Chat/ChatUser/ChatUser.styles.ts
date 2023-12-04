import {styled} from "styled-components"
type ChatUserPropsType={
    currentChat:boolean
}
export const ChatUserWrapper = styled.div<ChatUserPropsType>`

    display: flex;
    gap: 0.7rem;
    padding: 1rem  1rem ;
    cursor: pointer;
    background-color: ${props=>props.currentChat ?"var(--primary_color)":""};
    border-radius: 10px;
    &:hover{
        background-color: var(--light_dark);
    }
img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
}
.chatUser{
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    .username{

        color: ${props=>props.currentChat ?"white":"#ffffff91;"};
        font-size: 14px;
        letter-spacing: 0.9px;
    }
    .message{
        font-size: 11px;
        letter-spacing: 1px;
        color: 
        ${props=>props.currentChat ?"white":"var(--fade_text);"};
    }
}

`

