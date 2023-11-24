import { useContext, useEffect } from 'react'
import { SearchContext } from '../context/search'
import { useMovies } from '../hooks/useMovies'

export function ListOfMovies ({ movies }) {
  const PrefixImage = 'https://image.tmdb.org/t/p/w500/'
  const NotFoundImage = 'https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg'
  return (
    <ul>
      {movies?.map(item => {
        return (
          <li key={item.id}>
            <div className='poster'>
              <img src={item.poster_path ? PrefixImage + item.poster_path : NotFoundImage} alt={item.title} />
              {console.log(PrefixImage + item.poster_path)}
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
  }, [search])

  const hasMovies = movies?.length > 0 // verifica si hay mas de un elemento para mostrar

  return (hasMovies ? (<ListOfMovies movies={movies} />) : (<NoMoviesResult />))
}
