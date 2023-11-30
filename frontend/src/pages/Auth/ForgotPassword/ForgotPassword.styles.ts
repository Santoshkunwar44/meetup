import {styled} from "styled-components"

export const ForgotPasswordWrapper = styled.div`


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
            color: var(--main_color);
        }
    }
    .form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.4rem;
        .forgotPassword{
            color: var(--main_color);
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
                color: var(--main_color);
            }

        input{
            &::placeholder{
                font-size: 14px;
            }
        }            
        }
        button{
            background-color: var(--main_color);
            height: 50px;
            font-size: 18px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;


          
        }
        .loading{
            background-color: transparent;
            border: 1px solid var(--main_color);

            iframe{
                width: 30px;
                height: 30px;
            }

        }
    
    }
    .goToText{
        color: var(--main_color);
        text-align: center;
        letter-spacing: 1px;
        font-size: 14px;
    }
    .hrLine{
        height: 0.5px ;
        border: none;
        width: 100%;
        background-color: var(--light_dark);
    }
}


`