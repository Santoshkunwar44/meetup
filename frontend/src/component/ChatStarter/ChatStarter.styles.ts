import {styled} from "styled-components"

export const ChatStarterWrapper =styled.div`

flex: 9;
height: 100%;
display: flex;
align-items: center;
justify-content: center;

.content{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    align-items: center;
    img{
        width: 200px;
    }
    .starterText{
        font-weight: 500;

        font-size: 1.2rem;
        color: gray;
        letter-spacing: 0.8px;
    }
    .findButton{
        height: 45px;
        padding: 0 1rem;
        border: none;
        font-size: 14px;
        background-color: #3742fa;
        border-radius: 4px;
        font-size: 14px;
        letter-spacing: 0.9px;

    }
}

`