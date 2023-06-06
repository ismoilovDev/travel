import React, { useEffect, useState } from 'react'
import Main from '../../components/Main/Main'
import MovieList from '../../components/MovieList/MovieList'
import Pagination from '../../components/Pagination/Pagination'
import { getAllMovies } from '../../services/api'
import { Container } from '../../styles/styled'
import Title from '../../components/Title/Title'
import { useParams } from 'react-router'
import SkeletonBox from '../../components/Skeleton/SkeletonBox'

const PER_PAGE = 20

function Movies() {
   const { page } = useParams()
   const [movies, setMovies] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const [currentPage, setCurrentPage] = useState(page)
   const [total, setTotal] = useState(0)

   useEffect(() => {
      const controller = new AbortController();
      setIsLoading(true)
      getAllMovies(`/movie?api_key=10927fb143f2a18c417e39a39f340a01&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}`)
         .then(data => {
            if (data.results) {
               setMovies(data?.results)
               setIsLoading(false)
               setTotal(Math.ceil(data?.data?.total / 20))
            } else {
               console.log('Server Error: ', data?.message)
            }
         })
         .catch(error => console.log(`Error: ${error}`))

      return () => {
         controller.abort();
      };
   }, [currentPage])

   return (
      <Main isMoviesPage={true}>
         <Container>
            {
               isLoading ?
                  <SkeletonBox /> :
                  <>
                     <Title title="Фильмы" />
                     <MovieList movies={movies} />
                     <Pagination
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        baseURL="movies"
                        total={total}
                     />
                  </>
            }
         </Container>
      </Main>
   )
}

export default Movies