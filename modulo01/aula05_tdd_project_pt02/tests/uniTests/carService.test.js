const { describe, it, before, beforeEach, afterEach } = require('mocha')
const CarService = require('./../../src/service/carService')

const {join} = require('path')
const { expect } = require('chai')
const sinon = require('sinon')
const {sandBox} = require('sinon')

const carsDatabase = join(__dirname, './../../database', 'cars.json')

const mocks = {
  validCarCategory: require('./../mocks/valid_category.json'),
  validCar: require('./../mocks/valid_car.json'),
  validCustomer: require('./../mocks/valid_customer.json')
}

describe('CarService Suite Tests', () => {
  let carService = {}
  let sandBox = {}
  before(() => {
    carService = new CarService({
      cars: carsDatabase
    });
  })
  beforeEach(() => {
    sandBox = sinon.createSandbox()
  })
  afterEach(() => {
    sandBox.restore()
  })

  it('Should retrieve a random position form an array', () => {
    const data = [0, 1, 2, 3, 4]
    const result = carService.getRandomPositionFromArray(data)

    expect(result).to.be.lte(data.length).and.be.gte(0)
  })
  it('Should choose the first id from cardIds in carCategory', () => {
    const carCategory = mocks.validCarCategory
    const carIdIndex = 0

    sandBox.stub(
      carService,
      carService.getRandomPositionFromArray.name
    ).returns(carIdIndex)

    
    
    const result = carService.chooseRandomCar(carCategory)
    console.log('index',result)
    const expected = carCategory.carIds[carIdIndex]

    expect(carService.getRandomPositionFromArray.calledOnce).to.be.ok
    expect(result).to.be.equal(expected)
  })
  it('Given a carCategory it should return an available car', async () => {
    const car = mocks.validCar
    //Cria um instancia imutavel, pode sofrer alteração que não irá alterar o objeto pai
    const carCategory = Object.create(mocks.validCarCategory)
    carCategory.carIds = [car.id]

    sandBox.stub(
      carService.carRepository,
      carService.carRepository.find.name,
    ).resolves(car)

    sandBox.spy(
      carService,
      carService.chooseRandomCar.name,
    )

    const result = await carService.getAvailableCar(carCategory)
    const expected = car

    expect(carService.chooseRandomCar.calledOnce).to.be.ok
    expect(carService.carRepository.find.calledWithExactly(car.id)).to.be.ok
    expect(result).to.be.deep.equal(expected)
  })
})