import styled from "styled-components";

export const MovieListComponent = styled.div`
   display: grid;
   grid-template-columns: repeat(1, 1fr);
   grid-gap: 1.5rem;
   padding: 1.5rem 0;
   @media (min-width: 768px) {
      & {
         grid-template-columns: repeat(2, 1fr);
         grid-gap: 1rem;
      }
   }

   @media (min-width: 1200px) {
      & {
         grid-template-columns: repeat(3, 1fr);
      }
   }

`

