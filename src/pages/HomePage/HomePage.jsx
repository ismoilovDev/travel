import React, { useEffect, useState } from 'react'
import { Container } from '../../styles/styled'
import Main from '../../components/Main/Main'
import Slider from '../../components/Slider/Slider'
import Carusel from '../../components/Carusel/Carusel'
import Title from './../../components/Title/Title';
import { CaruselBox } from './../../styles/styled';
import Motive from '../../components/Motive/Motive';
import db from '../../db/monuments.json'



function HomePage() {
   const [monuments, setMonuments] = useState([])

   useEffect(() => {
      setMonuments([...db?.monuments])
   }, [])

   return (
      <Main>
         <Slider />
         <Container>
            <Motive />
            <CaruselBox>
               <Title title={'Top Monuments'} />
               <Carusel contents={monuments} type={'home'} />
            </CaruselBox>
         </Container>
      </Main>
   )
}

export default HomePage