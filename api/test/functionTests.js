import chai from 'chai'
import chaiHttp from 'chai-http'
import FilesController from '../controllers/filesController.js'
import { app } from '../api.js'
import { wrongInputArray, rightInputArray } from './inputs.js'
import { resultCheckData, resultOnefile } from './results.js'

chai.use(chaiHttp)
const should = chai.should()

describe('Testing FilesController functions: ', () => {
  describe('Test checkDataFile Function', () => {
    it('should return []', function () {
      const controller = new FilesController()
      const result = controller.checkDataFile(wrongInputArray)
      result.should.be.deep.equal([])
    })

    it('should return the object defined in resultCheckData', () => {
      const controller = new FilesController()
      const result = controller.checkDataFile(rightInputArray)
      result.should.be.deep.equal(resultCheckData)
    })
  })

  describe('Test getOneDataFile Function', () => {
    it('should return data of the file', async () => {
      const controller = new FilesController()
      const result = await controller.getOneDataFile('test2.csv')
      result.should.be.deep.equal(resultOnefile)
    })
  })
})

describe('Testing Api Endpoints: ', () => {
  describe('GET /files/data', () => {
    it('should return 200', async () => {
      const res = await chai.request(app).get('/files/data')
      res.statusCode.should.be.deep.equal(200)
    })
  })

  describe('GET /files/data?filename=example.csv', () => {
    it('should return 200', async () => {
      const res = await chai.request(app).get('/files/data?fileName=test1.csv')
      res.statusCode.should.be.deep.equal(200)
    })

    it('should return 400', async () => {
      const res = await chai.request(app).get('/files/data?fileName=test4.jpg')
      res.statusCode.should.be.deep.equal(400)
    })
  })
})
