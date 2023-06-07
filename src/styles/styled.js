import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   padding: 0 1rem;
   @media (min-width: 420px) {
      padding: 0 2rem;
   }
   @media (min-width: 768px) {
      width: 90%;
      margin: 0 auto;
   }
   @media (min-width: 1200px) {
      width: 85%;
   }
`

export const Wrap = styled.div`
   position: relative;
   width: 100%;
   min-height: ${props => props.isMoun ? '440px': '600px'};
   padding: 3rem 2rem;
   display: flex;
   justify-content: flex-end;
   background-image: 
      linear-gradient(180deg, rgba(22, 21, 26, 0.82) 5.05%, rgba(22, 21, 26, 0) 31.31%),
      linear-gradient(0deg, #16151A -2%, rgba(22, 21, 26, 0) 48.02%),
      linear-gradient(89.65deg, rgba(7, 6, 14, 0.88) -0.74%, rgba(7, 6, 14, 0) 50.25%),
      url(${props => props.bg_url});
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
   @media (min-width: 992px) {
      padding: 3rem;
   }
   @media (min-width: 1200px) {
      padding: 3rem 6rem 3rem 3rem;
   }
`

export const CaruselBox = styled.div`
   width: 100%;
   padding: 2rem 0;
`