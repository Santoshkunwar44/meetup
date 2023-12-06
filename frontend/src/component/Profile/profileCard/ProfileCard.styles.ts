import {styled} from "styled-components"

export const ProfileCardWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    .cardContent{
        display: flex;
        width: 100%;
        padding: 1rem;
        .leftBox{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
            flex: 4;
            img{
                width: 140px;
                height: 140px;
                border: 5px solid var(--primary_color);
                padding: 5px;
                border-radius: 50%;
            }
         
        }
        .rightBox{
            flex: 8;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            .topBox{
                display: flex;
                align-items: center;
                gap: 1rem;

                svg{
                  cursor: pointer;
                    fill: var(--primary_color);
                }
                button{
                    width:fit-content;
                    padding: 0 1rem;
                    height: 40px;
                    letter-spacing: 0.9px;
                    color: var(--primary_color);
                    border-radius: 7px;
                    border: 1px solid var(--primary_color);
                    background-color: var(--light_dark);

                }
                .followingButton{
                    
                    
                }
                .MessageButton{
                    color: white;
                    background-color: var(--primary_color);
                }
              
                .userName{
                    font-size: 1.5rem;
                    font-weight: 600;
                }
           
            }
              .followBox{
                    display: flex;
                    gap: 1rem;
                    button{
                        letter-spacing: 1px;
                        font-size: 15px;
                    }
                }
            .profileEmail{
                font-size: 15px;
                letter-spacing: 1px;
                color: #ffffff95;
            }
            .bioDetails{
                color:#ffffff;
                letter-spacing: 1px;
                font-size: 15px;
            }
            .mutualFriends{
                letter-spacing: 0.9px;
                font-size: 14px;
                .muttualName{
                    color: var(--primary_color);
                }
            }
        }
    }
`