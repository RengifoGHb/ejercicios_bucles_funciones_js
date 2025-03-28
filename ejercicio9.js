const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
]

function findOldestXMen(xMen) {
  xMen.sort((a, b) => a.year - b.year)
  const groupedByYear = {}
  for (const hero of xMen) {
    const year = hero.year
    if (!groupedByYear[hero.year]) {
      groupedByYear[hero.year] = []
    }
    groupedByYear[year].push(hero.name)
  }
  const OldestYear = Math.min(...xMen.map((hero) => hero.year))
  return groupedByYear[OldestYear]
}

console.log(findOldestXMen(xMen))
