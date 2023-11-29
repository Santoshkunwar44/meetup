import {styled} from "styled-components"

export const FriendItemWrapper = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
padding: 1.5rem ;
align-items: center;
border-bottom: 1px solid #4f597b24;
/* background-color:#3e439b1a; */
.leftItem{
    display: flex;
    gap: 0.5rem;

    img{
        width: 55px;
        height: 55px;
        border-radius: 50%;
        object-fit: cover;
        padding: 4px;
    }
    .userInfo{
        display: flex;
        flex-direction: column;
        gap: 0.2rem;

        .username{
            font-size: 15px;
            font-weight: 300;
            letter-spacing: 0.9px;

        }

        .followersCount{
            color: #ffffff91;
            font-size: 13px;
            font-weight: 100;
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