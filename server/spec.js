var app = require('./server');
var request = require('supertest');
var expect = require('chai').expect;

// TODO: make tests for the other CRUD routes
// DELETE, UPDATE, PUT, GET ONE
// to run the test type mocha server/specs.js

describe('[LIONS]', function() {
  it('should get all lions', function(done) {
    request(app)
      .get('/lions')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        expect(resp.body).to.be.an('array');
        done();
      });
  });

  it('should post a lion', done => {
    const lion = { name: 'chikako', age: 42, character: 'calm' };

    request(app)
      .post('/lions')
      .send(lion)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, resp) => {
        expect(resp.body).to.be.an('object');
        expect(resp.body.name).to.eqls('chikako');
        // if you use eqls it's comparing properties deep equal
        // if you use to.equals then it has to be the same object. toBe for jasmin
        // expect(resp.body).to.eqls(lion);
        done();
      });
  });

  it('should update lion', done => {
    const lion = { name: 'chikako', age: 42, character: 'calm' };

    request(app)
      .post('/lions')
      .send(lion)
      .set('Accept', 'application/json')
      .end((err, resp) => {
        const updateLion = resp.body;
        const newLion = { ...updateLion, name: 'chi', age: 29 };
        request(app)
          .put('/lions/' + updateLion.id)
          .send(newLion)
          .end((err, resp) => {
            expect(resp.body).to.eql(newLion);
            done();
          });
      });
  });

  it('should delete lion', done => {
    const lion = { name: 'chikako', age: 42, character: 'calm' };
    request(app)
      .post('/lions')
      .send(lion)
      .set('Accept', 'application/json')
      .end((err, resp) => {
        const createdLion = resp.body;
        request(app)
          .delete(`/lions/${createdLion.id}`)
          .end((err, resp) => {
            expect(resp.body).to.eqls(createdLion);
            done();
          });
      });
  });
});
