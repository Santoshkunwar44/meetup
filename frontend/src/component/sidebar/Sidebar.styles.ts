import {styled} from "styled-components"

export const SidebarWrapper = styled.div`

flex: 3;
background-color: var(--light_dark);
position: relative;
border-radius: 1rem;
.sidebarList{

    display: flex;
    flex-direction: column;
    .sidebarItem{
        height: 65px;
        display: flex;
        gap: 0.5rem;
        cursor: pointer;
        padding: 1rem 2rem;

        align-items: center;

        span{
            font-size: 15px;
            letter-spacing: 0.9px;
        }
        svg{
            font-size: 1.5rem;
        }
        .profileImage{
            width: 25px;
            height: 25px;
        }
    }
}
    .logoutBtn{
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem 2rem;
        position: absolute;
        bottom: 2rem;


        svg{
            font-size: 1.5rem;
        }
}

`