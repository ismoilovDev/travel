import React from 'react'
import Button from '../Button/Button'
import { Motive_Wrap } from './style'
import Title from '../Title/Title'

function Motive() {
   return (
      <Motive_Wrap>
         <Title title={'Discover Uzbekistan!'} />
         <p>
            Uzbekistan is a mysterious country of the East, where the history of cities gathered in legends, where the sun shines all year round and this reflects the unique nature and beautiful hearts of people.
         </p>
         <span>
            Welcome to the country of magnificent architecture and ancient traditions preserved a unique heritage. Everyone who comes to this blessed land is welcome here! If you have visited Uzbekistan once, be sure, you will want to return back here again.
         </span>
         <Button title={"More..."} path={"/"} />
      </Motive_Wrap>
   )
}

export default Motive