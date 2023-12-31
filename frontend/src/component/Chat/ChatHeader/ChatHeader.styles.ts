import {styled} from "styled-components"


export const ChatHeaderWrapper = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--light_dark);
    border-radius: 0.5rem;
    padding: 0 1rem;
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
            .imageWrapper{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                position: relative;

                img{
                    object-fit: cover;
                    border-radius: 50%;
                    width: 100%;
                    height: 100%;
                }
                .activeDot{
                     width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #13ff13;
            right: 5px;
            bottom: 1px;
            position: absolute;
                }
            }
            .userInfo{
                .chatUsername{
                    font-size: 15px;
                    letter-spacing: 0.9px;
                    font-weight: 400;
                    color: #ffffff92;

                }
                .statusText{
                    font-size: 12px;
                    font-weight: 100;
                    letter-spacing: 0.8px;
                    color: var(--fade_text);
                }
            }
        }
    }
    .chatAction{
        .optionButton{
            fill: gray;
            cursor: pointer;
            font-size: 1.2rem;
        }
    }
`