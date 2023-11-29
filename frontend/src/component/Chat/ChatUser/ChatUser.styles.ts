import {styled} from "styled-components"

export const ChatUserWrapper = styled.div`

    display: flex;
    gap: 0.7rem;
    padding: 1rem  1rem ;
    cursor: pointer;
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

        color: #ffffff91;

        font-size: 14px;
        letter-spacing: 0.9px;
    }
    .message{
        font-size: 11px;
        letter-spacing: 1px;
        color: var(--fade_text);
    }
}

`

