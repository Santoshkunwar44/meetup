import {styled} from "styled-components"

export const FriendsSidebarWrapper = styled.div`

flex: 3;
border-right: 1px solid var(--fade_text);
display: flex;
flex-direction: column;
gap: 1rem;
.friendSidebarItem{
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    border-radius:3px;
    &:hover{
        background-color: var(--light_dark);
    }
    .iconBox{
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        background-color: var(--primary_color);
        border-radius: 50%;
        svg{
            font-size: 1.3rem;
        }

    }
    
    .itemName{
        letter-spacing: 1px;
    }
}

    
`