import {styled} from "styled-components"
export const ResetPasswordWrapper = styled.div`


height: 100vh;
background-color: var(--dark_color);
display: flex;
align-items: center;
justify-content: center;
.mainContent{
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .contentHeader{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;

        .headerText{
            font-weight: 700;
            font-size: 2rem;
            letter-spacing:1px;
            color: var(--primary_color);
        }
    }
    .form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.4rem;
        .forgotPassword{
            color: var(--primary_color);
            cursor: pointer;
            font-size: 15px;
            letter-spacing: 1px;
            text-align: end;
        }
        .formItem{
            display: flex;
            flex-direction: column;
            gap: 8px;
            width: 100%;

            label{
                font-size: 12px;
                letter-spacing: 0.9px;
                color: var(--primary_color);
            }
            .invalidMessage{
                color: red;
                letter-spacing: 1px;
                font-size: 12px;
            }
            input{
                height: 50px;
                border-radius: 4px;
                background-color: transparent;
                border: 1px solid var(--primary_color);
                padding: 0 10px;
                &::placeholder{
                    letter-spacing: 0.9px;
                    font-size: 14px;
                    color: var(--primary_color);
                }
            }
            
        }
        button{
            background-color: var(--primary_color);
            height: 50px;
            cursor: pointer;
            font-size: 18px;
        }
    }
    .goTo{
         color: var(--primary_color);
        text-align: center;
        letter-spacing: 1px;
        font-size: 12px;
        letter-spacing:2px;
        cursor: pointer;
    }
}

`