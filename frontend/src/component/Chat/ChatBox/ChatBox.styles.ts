import {styled} from "styled-components"
export const ChatBoxWrapper = styled.div`
flex: 3;
height: 100%;
display: flex;
flex-direction: column;
border-right: 1px solid #34495e54;
.searchUser{
    margin: 0 auto;
    width: 92%;
    height: 90px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    
    .inputBox{
        width: 100%;
        background-color: var(--light_dark);
        height: 50%;
        border-radius: 4px;
    }

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
}
`