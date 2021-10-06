const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

app.use(cors())

app.use(express.json())

let persons = [
  {
    name: 'Arto Hellas',
    number: '040-123456',
    id: 1
  },
  {
    name: 'Dan Abramov',
    number: '12-43-234345',
    id: 2
  },
  {
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
    id: 3
  },
  {

    name: 'Ada Lovelace',
    number: '39-44-5323523',
    id: 4
  }
]
const gerenateID = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => n.id))
    : 0
  return maxId + 1
}
morgan.token('body', (req, res) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.get('/', (request, response) => {
  response.send('<h1>Hello world!</h1>')
})
app.get('/api/persons', (request, response) => {
  response.json(persons)
})
app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(pers => pers.id === id)
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})
app.get('/info', (request, response) => {
  const numberOfPersons = Number(persons.length)
  const date = new Date()
  response.send(`<div><p>Phonebook has info for ${numberOfPersons}</p><p>${date}</p></div>`)
})
app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(pers => pers.id !== id)
  response.status(204).end()
})
app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'content missing'
    })
  }
  const personInPersons = Object.values(persons).filter(pers => pers.name === body.name)
  console.log(personInPersons)
  if (persons.some(({ name }) => name === body.name)) {
    return response.status(400).json({
      error: 'name must be unique'
    })
  }
  const person = {
    name: body.name,
    number: body.number,
    id: gerenateID()
  }
  persons = persons.concat(person)

  response.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
