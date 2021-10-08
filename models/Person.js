const { Schema, model } = require('mongoose')

const personShema = new Schema({
  name: String,
  number: Number
})

const Person = model('Person', personShema)

personShema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})
/*  const person = new Person({
  name: 'Alex',
  number: 12345
})

person.save().then(result => {
  console.log(result)
  mongoose.connection.close()
}).catch(err => {
  console.error(err)
}) */

module.exports = Person
