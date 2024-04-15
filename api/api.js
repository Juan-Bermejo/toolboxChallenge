import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes/routes.js'
import cors from 'cors';
const port = 5000

export const app = express()

app.use(cors({
  origin: "http://localhost:3000"
}))

app.use(bodyParser.json())
app.use('/files/', routes)

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
