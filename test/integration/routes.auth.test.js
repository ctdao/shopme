process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../../src/server/app');
const knex = require('../../src/server/db/connection');

describe('routes: auth', () => {
    beforeEach(() => {
        returnknex.migrate.rollback()
            .then(() => { return knex.migrate.latest(); });
    });

    afterEach(() => {
        return knex.migrate.rollback();
    })
})

describe('POST /auth/register', () => {
    it('should register a new user', (done) => {
        chai.request(server)
            .post('/auth/register')
            .send({
                username: 'test',
                password: 'test'
            })
            .end((err, res) => {
                should.not.exist(err);
                res.redirects.length.should.eql(0);
                res.status.should.eql(200);
                res.type.should.eql('application/json');
                res.body.status.should.eql('success');
                done();
            });
    });
});
