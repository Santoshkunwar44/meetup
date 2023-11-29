import {styled} from "styled-components"

export const ChatSettingPopoverWrapper = styled.div`
background-color: #121225;
border-radius: 10px;
overflow: hidden;
.settingItem{
    height: 50px;
    padding: 1rem;

    display: flex;

    align-items: center;
    gap: 0.6rem;
    cursor: pointer;
    justify-content: flex-start;
    svg{
        /* fill: var(--primary_color); */
          fill: #ffffff91;
    }
    p{
        color: #ffffff91;
        font-size: 14px;
        letter-spacing: 1px;
    }
    &:hover{
        background-color: var(--primary_color);
    }
   
}
`

