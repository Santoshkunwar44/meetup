import {styled} from "styled-components"

export const ChatInputWrapper = styled.div`

display: flex;
gap: 1rem;
.micBox{
    width: 50px;
    height: 50px;
    cursor: pointer;
    border-radius: 50%;
    display: grid;
    place-items: center;;
    svg{
        font-size: 1.5rem;
        fill: var(--primary_color);
    }

}

input{
    background-color: #3e439b47;
    border: none;
    
    outline: none;
    border-radius: 5px;
    padding:  0 1rem;
    height: 50px;
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