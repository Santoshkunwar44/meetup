import {styled} from "styled-components"

export const ConfirmModalWrapper = styled.div`

background-color: #121225;
padding: 2rem;
border-radius: 1rem;
overflow: hidden;
display: flex;
flex-direction: column;
gap: 1rem;
align-items: center;
height: 130px;
justify-content: center;
.confirmText{
    letter-spacing: 0.9px;
}
.actionButtons{
    display: flex;
    gap: 1rem;
    justify-content: center;
    button{
        width: fit-content;
        padding: 0 1rem;
        height: 40px;
        border-radius: 5px;

    }
    .cancelBtn{
        background-color: red;
    }
    .confirmBtn{
        background-color: var(--primary_color);
    }
}
`
