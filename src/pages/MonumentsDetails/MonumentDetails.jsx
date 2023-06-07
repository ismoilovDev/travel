import React, { useEffect, useState } from 'react'
import Main from '../../components/Main/Main'
import { Container, Wrap } from '../../styles/styled'
import { useParams } from 'react-router'
import DetailBox from '../../components/DetailBox/DetailBox'
import Description from '../../components/Description/Description'
import db from '../../db/monuments.json'


function MonumentsDetails() {
  const [data, setData] = useState({})
  const { id } = useParams()


  useEffect(() => {
    window.scroll(0, 0)
    getSingleDate()
  }, [])

  function getSingleDate() {
    const newDate = db.monuments.filter( item => item.id == id)
    setData(newDate[0])
  }



  return (
    <>
      {
        data &&
        <Main>
          <Wrap bg_url={data.img_src}>
            <DetailBox title={data.title}/>
          </Wrap>
          <Container>
            <Description data={data.description} />
          </Container>
        </Main>
      }
    </>
  )
}

export default MonumentsDetails