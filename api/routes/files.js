import FilesController from '../controllers/filesController.js';
import express from 'express';

const file = new FilesController()
const routes = express.Router()


routes.get('/data', async(req, res) => {
   file.getAllDataFiles()
});
   //router.get('/data/:fileName', controllers.getProduct)
   //router.get('/list', controllers.getProduct)

export default routes;