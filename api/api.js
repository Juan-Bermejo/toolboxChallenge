import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes/routes.js'
const port = 3000

export const app = express()

app.use(bodyParser.json())
app.use('/files/', routes)

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
