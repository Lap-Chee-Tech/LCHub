process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./../src/app.js');
const should = chai.should();

chai.use(chaiHttp);

describe('Send GET request to /api', () => {
    it('Fetch JSON results from /api', (done) => {
        chai.request(server)
            .get('/api')
            .set('content-type', 'application/x-www-form-urlencoded')
            .send({
                message: 'test'
            })
            .end(async function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            })
    });
});