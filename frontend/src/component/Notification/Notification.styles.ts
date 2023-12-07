import {styled} from "styled-components"

export const NotificationWrapper =styled.div`
display: flex;
height: 100vh;
background-color: var(--dark_color);
padding: 2rem;
gap: 2rem;
.notificationContainer{
    flex: 9;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    .header{
        background-color: var(--light_dark);
        height: 75px;
        border: 1px solid var(--primary_color);
        border-radius: 0.8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        .markAsSeen{
            font-size: 14px;
            cursor: pointer;
            color: var(--primary_color);
            letter-spacing: 0.8px;
            text-decoration: underline;
        }

        .headerLeft{
            display: flex;
            align-items: center;
            gap: 5px;
            svg{
                fill: var(--primary_color);
                font-size: 1.3rem;
            }
            .headerTitle{
                font-weight: bold;
                font-size: 18px;
                letter-spacing: 1px;
                color: var(--primary_color);
            }
            
        }
        /* .markAsSeenP */
    }
    .notificationWrapper{
        border-radius: 10px;
        overflow: hidden;
        display: flex;
        gap: 10px;
        flex-direction: column;
        
    }

}
`