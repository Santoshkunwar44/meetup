import {styled} from "styled-components"

export const FriendsOutletWrapper =styled.div`

flex: 3;
height: 100%;
background-color: var(--dark_color);
height: 100vh;
display: flex;
padding: 2rem;
gap: 2rem;

.friendsContent{
    flex: 9;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .friendHeader{
        display: flex;
        height: 70px;
        overflow: hidden;
        align-items: center;
        border-radius: 1rem;
        background-color: #3e439b1a;
        border: 1px solid var(--primary_color);
        padding: 5px;

        .friendsTabItem{
            flex: 1;
            display: flex;
            justify-content: center;
            gap: 9px;
            align-items: center;
            padding: 0 1rem;
            height: 100%;
            cursor: pointer;
            border-radius: 5px;
            svg{
                font-size: 1.3rem;
                fill: var(--primary_color);
            }
            .headerTitle{
                font-size: 1.1rem;
                letter-spacing: 0.8px;
                color: var(--primary_color);
            }
            &:hover{
                background-color: var(--light_dark);
            }
        }
        .activeTab{
            background-color: var(--primary_color);
            border-radius:8px;
            svg{
                fill: #fff;

            }
            .headerTitle{
                color: white;
            }
        }
        /* background-color: var(--light_dark); */
        
    }
}
`