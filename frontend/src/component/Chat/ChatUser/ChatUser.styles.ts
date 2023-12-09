import {styled} from "styled-components"
type ChatUserPropsType={
    currentChat:boolean,
    seen:boolean|null
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
    .imageWrapper{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        position: relative;

        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
            border:3px solid ${props=>props.seen ? "var(--dark_color)":"var(--primary_color)"} ;

            padding: 3px;
        }
        .activeDot{
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #13ff13;
            right: 0;
            bottom: 5px;
            position: absolute;
        }
    }
.chatUser{
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    .username{

               color: ${props=>props.seen !== null ?  props.currentChat ? "white" : props.seen ? "#ffffff90":"var(--primary_color)"  :"var(--fade_text)"};

        font-size: 14px;
        letter-spacing: 0.9px;
    }
    .message{
        font-size: 11px;
        letter-spacing: 1px;
        color:  ${props=>(props.currentChat ?"white":"var(--fade_text)")}
        /* color: ${props=>props.seen !== null ?  props.currentChat ? "white" : props.seen ? "var(--fade_text)":"var(--primary_color)"  :"var(--fade_text)"}; */

    }
}

`

