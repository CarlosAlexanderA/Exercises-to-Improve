import { useState } from 'react'
import response1 from '../mocks/response_1.json'
import noResponse from '../mocks/no_response.json'

import { searchMovies } from '../services/movies'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const getMovies = () => {
    // const newMovies = await searchMovies({ search })
    // setMovies(newMovies)
    if (search) {
      setMovies(response1.results)
    } else {
      setMovies(noResponse)
    }
  }
  // console.log(movies)
  return { movies, getMovies }
}
