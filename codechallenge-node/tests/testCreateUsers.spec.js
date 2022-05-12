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

describe('/createUsers',  ()=> {

  it('Request ok, se retorna el usuario', async()=> {
    const person = {
      id: 1,
      name: 'alex',
      email: 'pando@hotmai.com',
      birthDate: '12-03-1991',
      address: {
        id: 0,
        street: 'cale salamanadxca',
        state: 'valencia',
        city: 'valencia',
        country: 'spain',
        zip: '33212'
      }}
    const stubUser = sinon.stub(service, 'post');
      stubUser.returns(person);
    const res = await chai.request(app)
    .post('/users/createUsers')
    .send( person )
    .set('Accept', 'application/json')
    expect(res.status).to.equal(201)
    stubUser.restore(); 
    });

    it('Request invalid input', async()=> {
      const stubUser = sinon.stub(service, 'post');
        stubUser.returns(null);
      const res = await chai.request(app)
      .post('/users/createUsers')
      .send({
        id: 1,
        name: 'alex',
        email: 'pando@hotmai.com',
        birthDate: '12-03-1991',
        address: {
          id: 0,
          street: 'cale salamanadxca',
          state: 'valencia',
          city: 'valencia',
          country: 'spain',
          zip: '33212'
        }})
      .set('Accept', 'application/json')
      expect(res.status).to.equal(405)
      stubUser.restore(); 
      });
});



