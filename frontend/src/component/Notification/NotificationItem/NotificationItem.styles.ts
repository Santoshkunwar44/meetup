import {styled} from "styled-components"

export const NotificationItemWrapper = styled.div`

display: flex;
width: 100%;
padding: 1rem;
align-items: center;
border-bottom: 1px solid #4f597b24;
    background-color: #3e439b1a;
    height: 80px;
    gap: 1rem;
    border-radius: 10px;

.imageWrapper{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    img{
        width: 40px;
        padding: 2px ;
        border:2px solid var(--primary_color);
        height: 40px;
        object-fit: cover;
        border-radius: 50%;
    }
}
.content{
    font-size: 15px;
    letter-spacing: 0.9px;
    
    color: #ffffffb4;
}
.time{
    font-size: 11px;
    color: var(--fade_text);
    font-weight: bold;

}

`