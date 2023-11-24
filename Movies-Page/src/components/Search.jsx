import { useContext } from 'react'
import { SearchContext } from '../context/search'

export function Search () {
  const { setSearch } = useContext(SearchContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    const fields = new window.FormData(event.target)
    // otra forma es hacerlo con la forma controlada, con useState, pero se renderiza cada vez que sucede la app

    const name = fields.get('name')
    setSearch(name)
  }
  return (
    <section className='search'>
      <form onSubmit={handleSubmit}>
        <input name='name' type='text' placeholder='Avengers, Star Wars, Game of Thrones' />
        <button>
          <i className='fa-solid fa-magnifying-glass' />
        </button>
      </form>

    </section>
  )
}
