import { useContext, useState } from 'react'

import { searchMovies } from '../services/movies'
import { PagesContext } from '../context/pages'

export function useMovies ({ search, page }) {
  const [movies, setMovies] = useState(null)
  const { setPages } = useContext(PagesContext)
  const getMovies = async () => {
    const newMovies = await searchMovies({ search, page })
    setMovies(newMovies)
    setPages(newMovies ? newMovies.total_pages : 0)
  }
  return { movies, getMovies }
}
