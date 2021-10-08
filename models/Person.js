const { Schema, model } = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const personShema = new Schema({
  name: { type: String, required: true, unique: true, minlength: [3, 'Must be at least 3 chars long, got {VALUE}'] },
  number: { type: String, required: true, unique: true }
})

const Person = model('Person', personShema)

personShema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

uniqueValidator.defaults.message = 'Must be at least 3 chars long, got {VALUE}'
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
personShema.plugin(uniqueValidator)
module.exports = Person
