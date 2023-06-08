import styled from "styled-components";

export const Nav = styled.nav`
   position: fixed;
   width: 100%;
   height: 70px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   left: 0;
   top: 0;
   padding: 0 1rem;
   background-color: ${props => props.scrolled ? 'rgb(31, 29, 36)' : 'transparent'};
   transition: background-color 0.1s ease 0s;
   z-index: 10;
   @media (min-width: 420px) {
      padding: 0 2rem;
   }
   @media (min-width: 768px) {
      padding: 0 3rem;
      height: 85px;
   }
   @media (min-width: 1200px) {
      padding: 0 4rem;
   }
`

export const Logo = styled.img`
   width: 70%;
   @media (min-width: 768px) {
      width: 64px;
   }
`

export const NavLinks = styled.div`
   &.open {
      display: flex;
      opacity: 1;
      transition: opacity .3s linear;
   }
   &.close {
      display: none;
      opacity: 0;
   }
   position: fixed;
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   left: 0;
   top: 0;
   padding: 1.5rem 0;
   padding-top: 100px;
   background-color: #000;
   transition: opacity .3s linear;
   opacity: 1;
   z-index: 1000;
      a {
         position: relative;
         display: inline-block;
         text-align: center;
         color: rgba(255, 255, 255, 0.7);
         font-weight: 400;
         font-size: 3.5vw;
         z-index: 1;
         margin: 15px;
         &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -5px;
            left: 0;
            background-color: #fff;
            z-index: -1;
            transition: transform 0.25s ease-in;
            transform: scaleX(0);
            transform-origin: right;
            // opacity: 0;
         }

         &:hover {
            color: #fff;
            &::after {
               transform: scaleX(1);
               // opacity: 1;
               transform-origin: left;
            }

         }
         @media (min-width: 360px) {
            font-size: 14px;
         }
         @media (min-width: 556px) {
            font-size: 1rem;
         }
      }

      a.active {
         color: #fff;
         &::after {
            transform: scaleX(1);
            opacity: 1;
         }
      }
   @media (min-width: 600px) {
      & {
         position: static;
         flex-direction: row;
         align-items: center;
         background-color: transparent;
         padding-top: 1.5rem;
      }
      &.close {
         display: flex;
         opacity: 1;
      }
   }
   @media (min-width: 768px) {
      margin-left: 20px;
   }
`

export const OpenBtn = styled.button`
   display: flex;
   border: 1px solid #fff;
   outline: none;
   background: transparent;
   border-radius: 5px;
   padding: 3px;
   cursor: pointer;
   svg {
      font-size: 22px;
      color: #fff;
   }
   @media (min-width: 600px) {
      & {
         display: none;
      }
   }
`

export const CloseBtn = styled.button`
   position: absolute;
   display: flex;
   right: 30px;
   top: 20px;
   border: 1px solid #fff;
   outline: none;
   background: transparent;
   border-radius: 50%;
   padding: 5px;
   cursor: pointer;
   svg {
      font-size: 20px;
      color: #fff;
   }
   @media (min-width: 600px) {
      & {
         display: none;
      }
   }
`