import { useContext, useEffect } from 'react'
import { SearchContext } from '../context/search'
import { useMovies } from '../hooks/useMovies'

export function ListOfMovies ({ movies }) {
  const PrefixImage = 'https://image.tmdb.org/t/p/w500/'

  return (
    <ul>
      {movies.map(item => {
        return (
          <li key={item.id}>
            <div className='poster'>
              <img src={`${PrefixImage}${item.poster_path}`} alt={item.title} />
              {console.log('hola')}
            </div>
            <h4>{item.title}</h4>
          </li>
        )
      })}
    </ul>
  )
}
function NoMoviesResult () {
  return (<h4>No hay peliculas para mostrar</h4>)
}

export function Movies () {
  const { search } = useContext(SearchContext)
  const { movies, getMovies } = useMovies({ search })
  // console.log(responseMovies)
  useEffect(() => {
    getMovies() // Llama a getMovies cada vez que el valor de search cambie
  }, [search, getMovies])

  const hasMovies = movies?.length > 0 // verifica si hay mas de un elemento para mostrar

  return (hasMovies ? (<ListOfMovies movies={movies} />) : (<NoMoviesResult />))
}
