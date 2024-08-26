import express from 'express';
import dotenv from 'dotenv';
import { product } from './app.js';
dotenv.config()
const app = express()
const port = process.env.PORT ||3000

app.get('/product', (req, res) => {
  res.send(product)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})