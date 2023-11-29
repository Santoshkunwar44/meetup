import {styled} from "styled-components";

export const AllFriendsWrapper = styled.div`

flex: 6;
display: flex;
flex-direction: column;
gap: 1rem;

.friendHeader{
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    svg{
        font-size: 2rem;
    }
    .headerTitle{
        font-size: 1.3rem;
        letter-spacing: 0.8px;
    }
}

`