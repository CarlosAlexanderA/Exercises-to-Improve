import { useContext, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { Search } from './components/Search'
import { PagesContext } from './context/pages'

export function App () {
  const { pages } = useContext(PagesContext)
  const [page, setPage] = useState(2)
  const [componentList, setComponentList] = useState([<Movies key={0} page={1} />])
  // const numPage = useMemo(0)
  const showMovies = () => {
    setComponentList([...componentList, <Movies key={componentList.length} page={page} />])
    setPage(page + 1)
  }

  return (
    <main>
      <header>
        <section className='logo'>
          <h1>Search Movies</h1>
        </section>

        <Search />
      </header>
      <section className='container'>
        <h3>Resultado de la busqueda</h3>
        <ul>

          {componentList.length !== 0 && componentList.map(item => item)}
        </ul>
        {(pages > 0 && pages >= page) && <button onClick={showMovies}>Cargar mas </button>}
      </section>
    </main>
  )
}
