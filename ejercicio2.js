const movies = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
]

let movies_older = 0
let movies_younger = 0

for (const movie of movies) {
  if (movie.releaseYear < 2000) {
    movies_older++
  } else {
    movies_younger++
  }
}

console.log(`${movies_older} películas antes del año 2000 y ${movies_younger} películas posteriores al año 2000.`)
