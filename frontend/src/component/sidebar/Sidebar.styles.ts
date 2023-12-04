import {styled} from "styled-components"


type SidebarWrapperPropsType={
    small:boolean|undefined
}

export const SidebarWrapper = styled.div<SidebarWrapperPropsType>`
flex: ${props=>props.small ? 1:3};
background-color: var(--light_dark);
position: relative;
border-radius: 1rem;

.sidebarList{

    display: flex;
    flex-direction: column;
    .sidebarItem{
        height: 70px;
        display: flex;
        gap: 1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        align-items: center;

        span{
            display: ${props=>props.small ? "none":"block"};
            font-size: 16px;
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
        cursor: pointer;
        letter-spacing: 1px;

        svg{
            font-size: 1.5rem;
        }
        span{
            display: ${props=>props.small ? "none":"block"};
            font-size: 16px;
            letter-spacing: 0.9px;
        }
}

`