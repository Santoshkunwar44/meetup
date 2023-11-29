import {styled} from "styled-components"
export const ChatBoxWrapper = styled.div`
flex: 3;
height: 100%;
display: flex;
flex-direction: column;
background-color: var(--light_dark);
border-radius: 1rem;
padding-top:1rem;
gap: 1rem;
.searchUser{
    margin: 0 auto;
    width: 92%;
    height: 60px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    
    .inputBox{

        width: 100%;
        height: 100%;
        border-radius: 4px;
        display: flex;
        align-items: center;
        padding: 0 1rem;
        background-color: var(--light_dark);
        gap: 0.4rem;

        svg{
            fill: gray;
        }

        input{
            width: 100%;
            height: 100%;
            border-radius: 10px;
            border: none;
            background-color: transparent;
            outline: none;
            
            &::placeholder{
                letter-spacing: 1px;
            }
        }
    }
}
.chatWrapper{
    display: flex;
    flex-direction:  column;
}
`