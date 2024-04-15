import FilesController from '../controllers/filesController.js'
import express from 'express'

const file = new FilesController()
const routes = express.Router()

routes.get('/data', async (req, res) => {
  try {
    const name = req.query.fileName
    if (name) {
      const response = await file.getOneDataFile(name)
      res.status(200).json(response)
    } else {
      const response = await file.getAllDataFiles()
      res.status(200).json(response)
    }
  } catch (error) {
    console.error('Error:', error.message)
    res.status(error.status || 500).json({
      message: error.message || 'Internal Server Error'
    })
  }
})

routes.get('/list', async (req, res) => {
  try {
    const response = await file.listFiles()
    res.status(200).json(response)
  } catch (error) {
    console.error('Error:', error.message)
    res.status(error.status || 500).json({
      message: error.message || 'Internal Server Error'
    })
  }
})

export default routes
