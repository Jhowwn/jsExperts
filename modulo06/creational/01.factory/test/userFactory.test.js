const rewiremock = require('rewiremock/node');
const { deepStrictEqual } = require('assert');

//<Poderia estar em outro arquivo>
const dbData = [{name: 'Test'}, {name: 'John Doe'}, {name: 'Jane Doe'}]
class MockDatabase {
  connect = () => this
  find = async (query) => dbData
}

//<Poderia estar em outro arquivo>
rewiremock(() => require('./../src/util/database')).with(MockDatabase)

;(async () => {
  {
    const expected = [{name: 'TEST'}, {name: 'JOHN DOE'},  {name: 'JANE DOE'}]
    rewiremock.enable()
    const UserFactory = require('../src/factory/userFactory');

    const userFactory = await UserFactory.createInstance()
    const result = await userFactory.find()
    deepStrictEqual(result, expected)
    rewiremock.disable()
  }
  {
    const expected = [{name: 'JHONATANSOUSA'}]
    const UserFactory = require('../src/factory/userFactory');

    const userFactory = await UserFactory.createInstance()
    const result = await userFactory.find()
    deepStrictEqual(result, expected)
  }
}) ()