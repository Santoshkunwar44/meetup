import {styled} from "styled-components"

export const FollowingsWrapper = styled.div`


flex: 6;
display: flex;
flex-direction: column;
gap: 1rem;
border-radius: 1rem;


.friendHeader{
    padding: 1rem;
    display: flex;
    height: 80px;
    align-items: center;
    gap: 0.5rem;
    border-radius: 1rem;
    background-color: #3e439b1a;
    /* background-color: var(--light_dark); */
    
    svg{
        font-size: 2rem;
    }
    .headerTitle{
        font-size: 1.3rem;
        letter-spacing: 0.8px;
    }
}
.friendsWrapper{
    background-color: #3e439b1a;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: scroll;
}
`