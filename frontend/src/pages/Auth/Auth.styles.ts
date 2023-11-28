import {styled} from "styled-components"
export const AuthWrapper = styled.div`

    height:100vh;
    width: 100%;
    background-color: var(--dark_color);
    display: flex;
    flex-direction: column;
    align-items: center;
    .topBar{
        height: 10vh;
        display: flex;
        justify-content: flex-end;
        width: 100%;
        align-items: center;
        padding: 0 2rem;
        .topbarButton{
            height: 40px;
            background-color: #3742fa;
            color:white;
            font-size:16px;
            letter-spacing: 0.9px;
                border: none;
            border-radius: 3px;
            padding: 0 1rem;
            
        }
    }

    .authContent{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 500px;
        padding: 2rem 0;
        width: 95%;


        .authHeader{
            display: flex;
            
            .authTitle{
                display: flex;
                flex-direction: column;
               
                h1{
                    font-size: 1.5rem;
                    letter-spacing: 1px;

                }
                
                .mainText{
                    color: #3742fa;
                    font-size: 1.8rem;
                }
            }
        }
        .formBox{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            .formInputItem{
                flex: 1;
                gap: 1rem;
                display: flex;
                input{
                    height: 60px;
                    width: 100%;
                    background-color: transparent;

                    border-radius: 4px;
                    padding: 5px 15px;
                    border: none;
                    outline: none;
                    border: 1px solid #3742fa6b;

                    &::placeholder{
                        letter-spacing: 1px;
                        font-weight: 400;


                    }
                    
                }
            }
            .authButton{
                height: 50px;
                background-color: #3742fa;
                border: none;
                outline: none;
                border-radius: 5px;
                font-size: 18px;
                letter-spacing: 1px;

            }
        }
        
    }
    

`