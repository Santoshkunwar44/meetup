import {styled} from "styled-components"

export const DisplayInfoWrapper = styled.div`

height: 100vh;
background-color: var(--dark_color );
display: flex;
justify-content: center;
padding: 4rem 1rem;
align-items: center;

.mainContent{
   max-width: 550px;
   width: 95%;
    display: flex;
    flex-direction:  column;
    align-items:  center;
    color: white;

    gap: 1rem;
}

button{
    background-color: var(--main_color);
    padding: 0 1rem;
}

.infoText{
    line-height: 25px;
    color: gray;
    letter-spacing: 0.9px;
    text-align: center;
}
`