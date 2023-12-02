import {styled} from "styled-components"

export const SuggestedItemWrapper = styled.div`

width: 200px;
border-radius: 1rem;


display: flex;
flex-direction: column;
gap: 1.5rem;
padding:2rem 10px;
align-items: center;
background-color: var(--light_dark);
transition: all .5s ease;
cursor: pointer;
img{
    width: 55px;
    height: 55px;
    object-fit: cover;
    border-radius: 50%;
}
.infoBox{
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    .username{
        font-size: 14px;
        font-weight: 300;
        letter-spacing: 0.9px;
    }
    .userEmail{
        font-size:6px;
        color: gray;
        letter-spacing: 0.8px;
    }
    
    button{
        width: fit-content;
        padding: 0 1rem;
        height: 40px;
        background-color: var(--primary_color);
        letter-spacing: 1px;
        color: white;
        border-radius: 5px;
    }
    
    
}

&:hover{
    scale: 1.04;

}

`