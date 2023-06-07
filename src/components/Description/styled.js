import styled from "styled-components";

export const DescriptionBox = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   flex-direction: column;
   padding: 2.5rem 0;
   
   @media (min-width: 768px) {
      flex-direction: row;
   }
`