import {styled} from "styled-components"

export const FriendItemWrapper = styled.div`
display: flex;
width: 90%;
justify-content: space-between;
padding: 1rem 0;
.leftItem{
    display: flex;
    gap: 0.5rem;

    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid var(--primary_color);
        padding: 4px;
    }
    .userInfo{
        display: flex;
        flex-direction: column;
        gap: 0.2rem;

        .username{
            font-size: 16px;
            color: #ffffff91;

        }

        .followersCount{
            color: var(--fade_text);
            font-size: 13px;
        }
    }
}
button{
            height: 35px;
            background-color: #3742fa;
            color:white;
            font-size:14px;
            letter-spacing: 0.9px;
            border: none;
            border-radius: 3px;
            padding: 0 1rem;
}
`