import {styled} from "styled-components"

export const FriendsSidebarWrapper = styled.div`

flex: 3;
display: flex;
flex-direction: column;
background-color: #3e439b1a;
border-radius: 1rem;
overflow: hidden;
.friendSidebarItem{
    padding: 1.5rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    cursor: pointer;
    border-radius:3px;
    &:hover{
        background-color: var(--light_dark);
    }
    .iconBox{
        width: 35px;
        height: 35px;
        display: grid;
        place-items: center;
        background-color: var(--primary_color);
        border-radius: 50%;
        svg{
            font-size: 1.1rem;
        }

    }
    
    .itemName{
        letter-spacing: 1px;
        font-weight: 300;
        font-size: 15px;
    }
}

    
`