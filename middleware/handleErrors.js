module.exports = (error, request, response, next) => {
  console.error(error)
  if (error.name === 'CastError') {
    response.status(400).send({ error: 'id used is malformed' })
  } else if (error.name === 'ValidationError') {
    response.status(400).send({ error: 'Lenght must be at least 3' })
  } else {
    response.status(500).end()
  }
}
