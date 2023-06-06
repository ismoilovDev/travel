import styled from "styled-components";

export const Motive_Wrap = styled.div`
   padding: 1rem 0;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   p {
      font-size: 3vw;
      color: #222;
      font-style: italic;
      margin-bottom: 28px;
      @media (min-width: 428px) {
         font-size: 14px;
      }
      @media (min-width: 992px) {
         font-size: 1.5rem;
         font-weight: 500;
      }
   }
`