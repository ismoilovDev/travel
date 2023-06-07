import React from 'react'
import { Button, Details } from './styled'

function DetailBox({ title }) {
   return (
      <Details>
         <h2>{title}</h2>
      </Details>
   )
}

export default DetailBox