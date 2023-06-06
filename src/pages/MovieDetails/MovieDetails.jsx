import React, { useEffect, useState } from 'react'
import Carusel from '../../components/Carusel/Carusel';
import Main from '../../components/Main/Main'
import Player from '../../components/Player/Player'
import { Container, Wrap } from '../../styles/styled'
import { useParams } from 'react-router'
import DetailBox from '../../components/DetailBox/DetailBox'
import PosterBox from '../../components/Poster/PosterBox'
import Description from '../../components/Description/Description'
import Title from './../../components/Title/Title';
import axios from 'axios';

const api_key = '10927fb143f2a18c417e39a39f340a01'

function MovieDetails() {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [actors, setActors] = useState([])
  const { id } = useParams()


  useEffect(() => {
    window.scroll(0, 0)
    getSingleMovie('movie')
    getActors()
  }, [])

  function getSingleMovie(type = 'movie') {
    setIsLoading(true)
    axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${api_key}&language=en-US`)
      .then(res => {
        console.log(res.data)
        setData(res.data)
        setIsLoading(false)
      })
      .catch(err => {
        getSingleMovie('tv')
      })
  }

  function getActors(type = 'movie') {
    axios.get(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${api_key}&language=en-US`)
      .then(res => {
        console.log(res.data)
        setActors(res.data.cast)
      })
      .catch(err => {
        getActors('tv')
      })
  }

  // useEffect(() => {
  //   const controller = new AbortController();

  //   getMovieDetails(`/movie-detail?id=${id}`)
  //     .then((data) => {
  //       console.log(data)
  //       if (data.code === 200) {
  //         setData(data?.data)
  //         setIsLoading(false)
  //       } else {
  //         console.log('Server Error: ', data?.message)
  //       }
  //     })
  //     .catch(error => console.log(`Error: ${error}`))

  //   return () => {
  //     controller.abort();
  //   };
  // }, [])

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {
        data &&
        <Main>
          <Wrap bg_url={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${data.backdrop_path}`}>
            <DetailBox title={data.title} handleModalOpen={handleModalOpen} />
            <PosterBox sourse={data.poster} />
          </Wrap>
          <Container>
            <Description data={data} />
            <Title title="Актёры и создатели" />
            <Carusel contents={actors} type="details" />
          </Container>
          <Player isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </Main>
      }
    </>
  )
}

export default MovieDetails