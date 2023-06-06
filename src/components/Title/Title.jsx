import React from 'react'
import styled from 'styled-components'

const TitleStyled = styled.h2`
   font-size: 1.5rem;
   color: #000;
   font-family: 'Prata', serif;
   letter-spacing: 1px;
   font-weight: 400;
   @media (min-width: 768px) {
      font-size: 2rem;
   }
   @media (min-width: 768px) {
      font-size: 2.2rem;
   }
   @media (min-width: 992px) {
      font-size: 2.8rem;
      margin-top: 1.5rem;
   }
`

function Title({ title }) {
   return (
      <TitleStyled>
         {title}
      </TitleStyled>
   )
}

export default Title