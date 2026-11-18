
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
}))

app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'CADPRINT API is running!',
  })
})

app.get('/api/health', (req, res) => {
  res.json({
    status: 'success',
    message: 'CADPRINT backend is healthy!',
  })
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`CADPRINT API running on port ${PORT}`)
})
