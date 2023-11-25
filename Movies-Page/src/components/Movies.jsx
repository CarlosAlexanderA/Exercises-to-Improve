import { useContext, useEffect } from 'react'
import { SearchContext } from '../context/search'
import { useMovies } from '../hooks/useMovies'

export function ListOfMovies ({ movies }) {
  const PrefixImage = 'https://image.tmdb.org/t/p/w500/'
  const NotFoundImage = 'https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg'
  return (
    <>
      {movies?.map(item => {
        return (
          <li key={item.id}>
            <div className='poster'>
              <img src={item.poster_path ? PrefixImage + item.poster_path : NotFoundImage} alt={item.title} />
            </div>
            <h4>{item.title}</h4>
          </li>
        )
      })}
    </>
  )
}
function NoMoviesResult () {
  return (<h4>No hay peliculas para mostrar</h4>)
}

export function Movies ({ page }) {
  const { search } = useContext(SearchContext)
  const { movies, getMovies } = useMovies({ search, page })
  // console.log(responseMovies)
  useEffect(() => {
    getMovies()// Llama a getMovies cada vez que el valor de search cambie
  }, [search])

  // const hasMovies = movies.results?.length > 0 // verifica si hay mas de un elemento para mostrar
  const hasMovies = movies !== null && movies.results?.length > 0
  return (hasMovies ? (<ListOfMovies movies={movies.results} />) : (<NoMoviesResult />))
}
