export async function searchMovies ({ search }) {
  if (search === '') return null

  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=ed7271bea97a2214a41a422fdcbbc872`)
    const json = await response.json()
    return json.results
  } catch (error) {
    throw new Error('Error searching movies')
  }
}
