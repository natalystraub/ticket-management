import express from 'express'
import cors from 'cors'
import { pool } from './db.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({ origin: process.env.FRONT_URL }))
app.use(express.json())

app.get('/health', async (_req, res) => {
  try {
    await pool.query('SELECT 1')
    res.json({ status: 'ok', db: 'ok' })
  } catch (err) {
    res.status(500).json({ status: 'error', db: err.message })
  }
})

app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`))
