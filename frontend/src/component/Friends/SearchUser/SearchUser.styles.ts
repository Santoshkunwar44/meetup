import {styled} from "styled-components"

export const SearchUserWrapper = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem 0;
.friendHeader{
    display: flex;
    align-items: center;
    background-color: var(--light_dark);
    gap: 0.2rem;
    padding: 0 1rem;
    border-radius: 5px;
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

`