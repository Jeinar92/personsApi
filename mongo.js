
const mongoose = require('mongoose')

const connectionString = process.env.MONGODB_URI

// conexion a mongo db

mongoose.connect(connectionString).then(() => {
  console.log('database conected')
}).catch(err => {
  console.error(err)
})
