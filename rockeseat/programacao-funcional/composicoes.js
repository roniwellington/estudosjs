const people = ['Rafa', 'Diego', 'Dani', 'Rod']
const upperCasePeopleThatStartsWithD = people
.filter(person => person.startsWith('D'))
.map(dperson => dperson.toUpperCase())