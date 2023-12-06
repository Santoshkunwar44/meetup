import {styled} from "styled-components"


type SidebarWrapperPropsType={
    small:boolean|undefined
}

export const SidebarWrapper = styled.div<SidebarWrapperPropsType>`
flex: ${props=>props.small ? 0.8:3};
background-color: var(--light_dark);
position: relative;
border-radius: 1rem;
padding-top: 1rem;

.sidebarList{
    display: flex;
    flex-direction: column;
    .sidebarItem{
        position: relative;
        height: 80px;
        display: flex;
        gap: 1rem;
        padding:  ${props=>props.small ? "0":"0 2rem"};
        justify-content: ${props=>props.small ? "center":"flex-start"};
        cursor: pointer;
        align-items: center;
        border-radius: 10px;

        span{
            display: ${props=>props.small ? "none":"block"};
            font-size: 16px;
            letter-spacing: 0.9px;
        }
        svg{
            font-size: 1.5rem;
        }
        .profileImage{
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }

        .badge{
            width: 25px;
            height: 25px;
            background-color: red;
            display: grid;
            place-items:center;
            border-radius: 50%;
            top: 0;
            right: -5px;
            position: absolute;
                font-size: 12px;
        }
        &:hover{
            background-color: var(--light_dark);
        }
    }
    .activeSidebar{
        background-color: var(--primary_color);
        color: white
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