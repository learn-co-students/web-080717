export function fetchMovies() {
  return fetch('http://localhost:3000/movies', {
    headers: {
      "Accept":"application/json",
      "Content-Type":"application/json",
      "Authorization":`Bearer ${localStorage.getItem('movieToken')}`
    }
  })
    .then((res) => res.json())
}
