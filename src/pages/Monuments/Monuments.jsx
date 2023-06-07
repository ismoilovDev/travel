import React, { useEffect, useState } from 'react'
import Main from '../../components/Main/Main'
import MovieList from '../../components/MovieList/MovieList'
import { Container, Wrap } from '../../styles/styled'
import Title from '../../components/Title/Title'
import SkeletonBox from '../../components/Skeleton/SkeletonBox'
import db from '../../db/monuments.json'
import bg_img from "../../assets/imgs/guz.jpg";

function Monuments() {
   const [monuments, setMonuments] = useState([])
   const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
      setIsLoading(true)
      setTimeout(() => {
         setMonuments(db.monuments)
         setIsLoading(false)
      }, 100);
   }, [])

   return (
      <Main>
         <Wrap bg_url={bg_img} isMoun={true}>
            <div className="text_box">
               <h1>Monuments of Uzbekistan</h1>
               <p>Popular destinations for tourists</p>
            </div>
         </Wrap>
         <Container>
            {
               isLoading ?
                  <SkeletonBox /> :
                  <>
                     <Title title="Monuments" />
                     <MovieList movies={monuments} />
                  </>
            }
         </Container>
      </Main>
   )
}

export default Monuments