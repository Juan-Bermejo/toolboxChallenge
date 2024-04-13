import FilesController from '../controllers/filesController.js';
import express from 'express';

const file = new FilesController()
const routes = express.Router()


routes.get('/data', async(req, res) => {
   const name = req.query.fileName;
   if(name) {
      const response = await file.getOneDataFile(name)
      res.status(200).json(response)
   } else {
      const response = await file.getAllDataFiles()
      res.status(200).json(response)
   }

});

routes.get('/list', async(req, res) => {
   const response = await file.getListFiles()
   res.status(200).json(response)
});

export default routes;