const express = require('express');
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config()

let PCtrl = require('./products_controller')

const app = express()
app.use(bodyParser.json())
massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
}).catch(err => {
  console.log('there is an error', err)
})

app.get('/api/products', PCtrl.getAll)
app.get('/api/product/:id', PCtrl.getOne)
app.put('/api/product/:id', PCtrl.update)
app.post('/api/product', PCtrl.create)
app.delete('/api/product/:id', PCtrl.delete)





const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log('Harry Potter', PORT)
})