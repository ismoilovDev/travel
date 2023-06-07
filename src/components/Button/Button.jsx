import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const ButtonStyled = styled(Link)`
   background: #DD2C00;
   height: 50px;
   line-height: 50px;
   max-width: 280px;
   padding: 0 30px;
   font-size: 21px;
   color: #fff;
   border-radius: 8px;
   position: relative;
   display: inline-block;
   float: none;
   margin: 20px auto 6px;
`

function Button({ title, path }) {
   return (
      <ButtonStyled className="reusable_btn" to={'/monuments'}>{title}</ButtonStyled>
   )
}

export default Button