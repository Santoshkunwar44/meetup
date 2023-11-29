import {styled} from "styled-components"

export const ChatInputWrapper = styled.div`

display: flex;
gap: 1rem;
padding: 0 1rem;
align-items: center;
.leftBox{
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.8rem;
}
  
    .micIcon{
        font-size: 1.3rem;
        fill: var(--primary_color);
    }
    input{
    background-color: var(--light_dark);
    border: none;
    
    outline: none;
    border-radius: 5px;
    padding:  0 1rem;
    height: 60px;
    flex: 1;

    &::placeholder{
    letter-spacing: 0.9px;
    }
}
.sendBox{
    width: 50px;
    height: 50px;
    background-color: var(--primary_color);
    display: grid;
    place-items: center;
    border-radius: 7px;

    svg{
        font-size: 2rem;
    }
}



`