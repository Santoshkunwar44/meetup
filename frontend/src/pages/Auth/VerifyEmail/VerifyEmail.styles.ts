import {styled} from "styled-components"

export const VerifyEmailWrapper = styled.div`


height: 100vh;
background-color: var(--dark_color);
display: flex;
align-items: center;
justify-content: center;
.mainContent{
    max-width: 500px;
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .contentHeader{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;

        .headerText{
            font-weight: 400;
            font-size: 20px;
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
                background-color: transparent;

                border: 1px solid var(--primary_color);
                padding: 0 10px;
                border-radius: 4px;
                outline: none;
                &::placeholder{
                    letter-spacing:0.9px;
                    color: var(--primary_color);
                }
            }
            
        button{
            background-color: var(--primary_color);
            height: 50px;
            cursor: pointer;
            font-size: 18px;
            padding: 0 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius:5px;
        }
        .loading{
            background-color: transparent;
            border: 1px solid var(--primary_color);
        }
        iframe{
            width: 40px;
            height: 40px;
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