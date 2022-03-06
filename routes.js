const { products, messages } = require('./model/DB.js')
const { Router } = require('express')
const router = Router()

router.get('/', async (req, res) => {
  try {
    const items = await products.all()
    const chat = await messages.all()
    res.render('index', { items, chat })
  }
  catch (e) {
    console.error(e)
    res.sendStatus(500)
  }
})

router.post('/productos', async (req, res) => {
  try {
    await products.create(req.body)
    res.redirect('/')
  }
  catch (e) {
    console.error(e)
    res.sendStatus(500)
  }
})

router.get('/productos', async (req, res) => {
  try {
    const items = await products.all()
    res.render('items', { items })
  }
  catch (e) {
    console.error(e)
    res.sendStatus(500)
  }
})

module.exports = router