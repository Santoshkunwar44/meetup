import {styled} from "styled-components"

export const ChatUserWrapper = styled.div`

    display: flex;
    gap: 1rem;
    border-bottom: 1px solid #34495e54;
    padding: 1rem  0 ;
    cursor: pointer;
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

        color: white;

        font-size: 14px;
        letter-spacing: 0.9px;
    }
    .message{
        font-size: 11px;
        letter-spacing: 1px;
        color: gray;
    }
}

`

