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

describe('/getusersById',  ()=> {

  it('Request ok, retorna el usuario con la id', async()=> {
    const personList = [
      {
          id: 2,
          name: 'avlad',
          email: 'pas@hotmail.com',
          birthDate: '01-06-1991',
          address: {
              id: 0,
              street: 'cale gijon',
              state: 'valencia',
              city: 'valencia',
              country: 'spain',
              zip: '33212'
          }
      }
  ]
    const stubUser = sinon.stub(service, 'getId');
      stubUser.returns(personList);
    const res = await chai.request(app)
    .get('/users/getusersById/2')
    .set('Accept', 'application/json')
    expect(res.status).to.equal(200)
    stubUser.restore(); 
  });

  it('Request User not found, usuario no encontrado', async()=> {
      const personList = [
        {
            id: 2,
            name: 'avlad',
            email: 'pas@hotmail.com',
            birthDate: '01-06-1991',
            address: {
                id: 0,
                street: 'cale gijon',
                state: 'valencia',
                city: 'valencia',
                country: 'spain',
                zip: '33212'
            }
        }
    ]
    const stubUser = sinon.stub(service, 'getId');
      stubUser.returns(personList);
    const res = await chai.request(app)
    .get('/users/getusersById/6')
    .set('Accept', 'application/json')
    expect(res.status).to.equal(404)
    stubUser.restore(); 
  });
});