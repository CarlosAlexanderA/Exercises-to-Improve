import { useState } from 'react'

export function Search () {
  const [search, setSearch] = useState('')
  const handleSubmit = () => {

  }
  return (
    <section className='search'>
      <form action='#' onSubmit={handleSubmit}>
        <input type='text' placeholder='Avengers, Star Wars, Game of Thrones' />
        <button>
          <i className='fa-solid fa-magnifying-glass' />
        </button>
      </form>
    </section>
  )
}
