import {styled} from "styled-components"

export const MessageSkeletonWrapper =styled.div`

   display: flex;
    flex-direction: column;
    gap: 1rem;
    .messageItem{
    padding: 0.8rem 1rem;
    border-top-right-radius: 1.5rem;
    border-top-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    border-bottom-left-radius: 0;
    max-width: 95%;
   
    }
`
