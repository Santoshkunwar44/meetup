import {styled} from "styled-components"
export const ChatBoxWrapper = styled.div`
flex: 3;
height: 100%;
display: flex;
flex-direction: column;
gap: 2rem;
border-right: 1px solid #34495e54;
.searchUser{
    width: 90%;
    border-radius: 5px;
    background-color: #34495e54;


    input{
        height: 50px;
        width: 100%;
        background-color: transparent;
        border: none;
        outline: none;
        padding: 0 1rem;

        &::placeholder{
            letter-spacing: 1px;
        }
    }
}
.chatWrapper{
    display: flex;
    flex-direction:  column;
    gap: 1rem;
}
`