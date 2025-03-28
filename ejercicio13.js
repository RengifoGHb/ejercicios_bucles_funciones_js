const actors = [
  { name: 'Leonardo DiCaprio', born: 1974 },
  { name: 'Tom Hanks', born: 1956 },
  { name: 'Meryl Streep', born: 1949 },
  { name: 'Brad Pitt', born: 1963 },
  { name: 'Johnny Depp', born: 1963 },
  { name: 'Scarlett Johansson', born: 1984 },
  { name: 'Jennifer Lawrence', born: 1990 },
  { name: 'Denzel Washington', born: 1954 },
  { name: 'Morgan Freeman', born: 1937 },
  { name: 'Cate Blanchett', born: 1969 }
]

function calculateActorsAges(actors) {
  let ActorsByAges = {}
  const CurrentYear = new Date().getFullYear()
  for (const actor of actors) {
    const ActorName = actor.name
    const ActorAge = CurrentYear - actor.born
    ActorsByAges[ActorName] = ActorAge
  }
  return ActorsByAges
}

console.log(calculateActorsAges(actors))
