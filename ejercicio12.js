const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
]

function findMutantByPower(mutants, power) {
  const groupedByPower = {}
  for (const mutant of mutants) {
    if (!groupedByPower[power]) {
      groupedByPower[power] = []
    }
    if (mutant.power === power) {
      groupedByPower[power].push(mutant.name)
    }
  }
  console.log(groupedByPower)
}

findMutantByPower(mutants, 'magnetism')
