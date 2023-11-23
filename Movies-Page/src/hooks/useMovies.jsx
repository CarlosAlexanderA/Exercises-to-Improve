import response1 from '../mocks/response_1.json'
export function useMovies () {
  const movies = response1.results
  return { movies }
}
