const controles = require('../src/controller');
const service = require('../src/service')
const chai = require('chai');
const app = require('../src/app');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = require('chai').expect;
chai.use(chaiHttp);
chai.use(sinonChai);

describe('/getUsers',  ()=> {

  it('Request ok, se retorna todos los usuarios', async()=> {

    const personList = [
        {
            id: 1,
            name: 'alex',
            email: 'pando@hotmai.com',
            birthDate: '12-031991',
            address: {
              id: 0,
              street: 'cale salamanadxca',
              state: 'valencia',
              city: 'valencia',
              country: 'spain',
              zip: '33212'
            }
        }
    ]
    const stubUser = sinon.stub(service, 'get');
      stubUser.returns(personList);
    const res = await chai.request(app)
    .get('/users/getUsers')
    .set('Accept', 'application/json')
    expect(res.status).to.equal(200)
    stubUser.restore(); 
    });
});


