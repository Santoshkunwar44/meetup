import {styled} from "styled-components"

export const SearchUserWrapper = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 2rem;
.friendHeader{
    display: flex;
    align-items: center;
    background-color: #3e439b1a;
    gap: 0.2rem;
    height: 80px;
    border-radius: 1rem;
    padding: 0 1rem;
    svg{
        font-size: 1.5rem;
        fill: var(--fade_text);
        color: var(--fade_text);
    }
    .headerTitle{
        font-size: 1.3rem;
        letter-spacing: 0.8px;
    }
    input{
        width: 100%;
        outline: none;
        height: 50px;
        border: none;
        border-radius: 4px;
        background-color: transparent;
        padding: 0 0.5rem;
        &::placeholder{
            font-size: 14px;
            letter-spacing: 0.8px;
            color: white;
        }
    }
}
.friendsWrapper{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: scroll;
}

`