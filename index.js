require('dotenv').config()
require('./mongo')
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const Person = require('./models/Person')
const notFound = require('./middleware/notFound')
const handleErrors = require('./middleware/handleErrors')
app.use(cors())

app.use(express.static('build'))
app.use(express.json())

/* const persons = [
  {
    name: 'Arto Hellas',
    number: 40123456
  },
  {
    name: 'Dan Abramov',
    number: 1243234345
  },
  {
    name: 'Mary Poppendieck',
    number: 39236423122
  },
  {
    name: 'Ada Lovelace',
    number: 39445323523
  }
] */

morgan.token('body', (req, res) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.get('/', (request, response, next) => {
  response.send('<h1>Hello world!</h1>').catch(error => next(error))
})
app.get('/api/persons', (request, response, next) => {
  Person.find({}).then(persons => {
    response.json(persons)
  }).catch(error => next(error))
})
app.get('/api/persons/:id', (request, response, next) => {
  const id = request.params.id
  Person.findById(id).then(person => {
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  }).catch(err => {
    next(err)
  })
})
app.get('/info', (request, response, next) => {
  Person.find().then(person => {
    const numberOfPersons = Number(person.length)
    const date = new Date()
    response.send(`<div><p>Phonebook has info for ${numberOfPersons}</p><p>${date}</p></div>`)
  }).catch(error => next(error))
})
app.delete('/api/persons/:id', (request, response, next) => {
  const id = request.params.id
  Person.findByIdAndDelete(id).then(() => {
    response.status(204).end()
  }).catch(error => next(error))
})
app.post('/api/persons', (request, response, next) => {
  const body = request.body
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'content missing'
    })
  }
  Person.find(body).then(person => {
    if (person.some(({ name }) => name === body.name)) {
      return response.status(400).json({
        error: 'name must be unique'
      })
    }
  }).catch(err => {
    next(err)
  })
  const newPerson = new Person({
    name: body.name,
    number: body.number
  })

  newPerson.save().then(savedPerson => {
    response.json(savedPerson)
  })
})
app.put('/api/persons/:id', (request, response, next) => {
  const id = request.params.id
  const body = request.body
  const newPersonInfo = {
    name: body.name,
    number: body.number
  }
  Person.findByIdAndUpdate(id, newPersonInfo, { new: true }).then(result => {
    response.json(result)
  }).catch(error => next(error))
})

app.use(notFound)
app.use(handleErrors)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
