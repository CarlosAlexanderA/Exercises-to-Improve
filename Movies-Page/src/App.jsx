import './App.css'
import { Movies } from './components/Movies'
import { Search } from './components/Search'
import { useMovies } from './hooks/useMovies'

export function App () {
  // const [search, setSearch] = useState('avenger')
  // useEffect(() => {
  //   fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=ed7271bea97a2214a41a422fdcbbc872`)
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch(err => console.error(err))
  // }, [])
  const { movies } = useMovies()

  return (
    <main>
      <header>
        <section className='logo'>
          <h1>Search Movies</h1>
        </section>
        {/* <section className='options'>
          <nav>
            <a href='#'>Inicio</a>
            <a href='#'>Peliculas</a>
            <a href='#'>Generos</a>
            <a href='#'>Series</a>
          </nav>
        </section> */}
        <Search />
      </header>
      <section className='container'>
        <h3>Resultado de la busqueda</h3>
        <Movies movies={movies} />
      </section>
    </main>
  )
}
