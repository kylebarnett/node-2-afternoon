module.exports = {
  create: (req, res) => {
    let { name, description, price, imageurl } = req.body
    let db = req.app.get('db')
    db.create_product([name, description, price, imageurl]).then(response => {
      res.status(200).send(response)
    })
  },

  getOne: (req, res) => {
    let { params } = req
    let db = req.app.get('db')
    db.read_product(params.id).then(response => {
      res.status(200).send(response)
    })
  },

  getAll: (req, res) => {
    let db = req.app.get('db')
    db.read_products().then(response => {
      res.status(200).send(response)
    })
  },

  update: (req, res) => {
    let { params, query } = req
    let { id } = req.params
    let db = req.app.get('db')
    db.update_product([params.id, query.desc]).then(response => {
      res.status(200).send(response)
    })
  },

  delete: (req, res) => {
    let { params } = req
    let db = req.app.get('db')
    db.delete_product([params.id]).then(response => {
      res.status(200).send(response)
    })
  }
}
// .catch(err => {
//   res.status(500)
//   console.log('there was an error', err)
// })