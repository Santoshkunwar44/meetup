import {styled} from "styled-components"


export const ChatHeaderWrapper = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .headerLeft{
        display: flex;
        align-items: center;
        gap: 1rem;
        .backButton{
            width: 30px;
            height: 30px;
            cursor: pointer;
            background-color: var(--primary_color);
            display: grid;
            place-items: center;
            border-radius: 5px;
        }

        .chatUser{
            display: flex;
            gap: 0.8rem;
            img{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                object-fit: cover;
            }
            .userInfo{
                .chatUsername{
                    font-size: 15px;
                    letter-spacing: 0.9px;

                }
                .statusText{
                    font-size: 12px;
                    letter-spacing: 0.8px;
                }
            }
        }
    }
    .chatAction{
        .optionButton{
            fill: var(--primary_color);
            font-size: 1.2rem;
        }
    }
`