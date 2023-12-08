import {styled} from "styled-components"

type MessageItemWrapperPropsType={
    own:boolean|null
}

export const MessageItemWrapper = styled.div<MessageItemWrapperPropsType>`
width: fit-content;
display: ${props=>props.own===null ? "none":"flex"};;
flex-direction: column;
gap: 0.5rem;
align-self: ${props=>props.own===true ? "flex-end":"flex-start"};
align-items: ${props=>props.own===true ? "flex-end":"flex-start"};;
cursor: pointer;

.messageContent{
    width: fit-content;
    background-color: ${props=>props.own  ? "var(--light_dark)":"var(--primary_color)"} ;
    padding: 0.8rem 1rem;
    border-top-right-radius: 1.5rem;
    border-top-left-radius: 1.5rem;
    border-bottom-right-radius: ${props=>props.own===true ? "0rem":"1.5rem"};
    border-bottom-left-radius:  ${props=>props.own===true ? "1.5rem":"0"};
    .messageText{
        color: ${props=>props.own===true ? "#ffffff91":"#ffffff"} ;
        letter-spacing: 0.9px;
        font-size: 14px;
        font-weight: 300;
    }
}
.time{
    color: #3c4659;
    font-size: 10px;
    letter-spacing: 0.9px;
    
}

`