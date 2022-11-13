const { expect } = require('chai');
const request = require('supertest');
const { generateToken } = require("../helpers/tokensFunctions");
const app = require('../app');


describe('TEST transactions', async () => {
    // generate token
    const token = await generateToken({
        "email": "test@test.com",
        "password": "123456"
    })
    // testing get all transactions
    describe('GET /transactions/', () => {
        // respond with a json containing a list of all transactions
        it('respond with a json containing a list of all transactions', (done) => {

            request(app)
                .get('/transactions')
                .auth(token, { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done)
        });
    });
    // testing get a Transaction
    describe('GET /transactions/:id', () => {

        // respond whit a json containing a single Transaction
        it('respond whit a json containing a single Transaction', (done) => {
            request(app)
                .get('/transactions/1')
                .auth(token, { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(200, done)
        });
        // respond error code 404 Couldn't find a Transaction
        it("respond error code 404 Couldn't find a Transaction", (done) => {
            request(app)
                .get('/transactions/x')
                .auth(token, { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(404, done)

        });
        // respond error code 403 forbidden (not authenticated user)
        it("respond error code 403 forbidden (not authenticated user)", (done) => {
            request(app)
                .get('/transactions/1')
                .auth("", { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(403, done)
        });

    });

    // testing create transactions
    describe('POST /transactions/', () => {
        // should save the Transaction to the database code 200

        it('respond whit 200 Transaction created successfully', async () => {
            const data = {
                amount: 10,
                description: "test",
                userId: 1,
                categoryId: 1
            }
            const result = await request(app)
                .post('/transactions/')
                .send(data)
                .auth(token, { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(200)
            expect(result.body.message).equal('Transaction created successfully')
        });


        // set data
        const data = [{ description: "test", userId: 1, categoryId: 1 },
        { amount: 0, description: "test", userId: 1, categoryId: 1 },
        { amount: 10, userId: 1, categoryId: 1 },
        { amount: 10, description: "test", categoryId: 1 },
        { amount: 10, description: "test", userId: 1 }]

        // should respond error code 400 bad request (amount)

        it('should respond error code 400 bad request (missing amount)', async () => {

            const result = await request(app)
                .post('/transactions/')
                .send(data[0])
                .auth(token, { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(400)

        });

        // should respond error code 400 bad request (amount)

        it('should respond Amount must be greater than 0', (done) => {

            request(app)
                .post('/transactions/')
                .send(data[1])
                .auth(token, { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(400, done)

        });

        // should respond error code 400 bad request (description)

        it('should respond error code 400 bad request (missing description)', (done) => {

            request(app)
                .post('/transactions/')
                .send(data[2])
                .auth(token, { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(400, done)

        });

        // should respond error code 400 bad request (userId) 

        it('should respond error code 400 bad request (missing userId)', (done) => {

            request(app)
                .post('/transactions/')
                .send(data[3])
                .auth(token, { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(400, done)

        });

        // should respond error code 400 bad request (categoryId) 

        it('should respond error code 400 bad request (missing categoryId)', (done) => {

            request(app)
                .post('/transactions/')
                .send(data[4])
                .auth(token, { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(400, done)

        });

        // respond error code 403 forbidden (not authenticated user)

        it('respond error code 403 forbidden (not authenticated user)', (done) => {
            const data = {
                amount: 10,
                description: "test",
                userId: 1,
                categoryId: 1
            }
            request(app)
                .post('/transactions/')
                .send(data)
                .auth('', { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(403, done)
        });

    });
    // testing update transactions
    describe('PUT /transactions/:id', () => {

        // should update the Transaction to the database code 200

        it('respond whit 200 Transaction created successfully', async () => {
            const data = {
                description: "test"
            }
            const result = await request(app)
                .put('/transactions/1')
                .send(data)
                .auth(token, { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(200)
            expect(result.body.message).equal('Transaction updated successfully')
        });

        // respond error code 404 Couldn't find a Transaction
        it("respond error code 404 Couldn't find a Transaction", async () => {
            const data = {
                description: "test",
            }
            const result = await request(app)
                .put('/transactions/x')
                .send(data)
                .auth(token, { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(404)
        });


        // should respond error code 400 bad request (description)

        it('should respond error code 400 bad request (missing description)', (done) => {
            const data = {
               
            }
            request(app)
                .put('/transactions/1')
                .send(data)
                .auth(token, { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(400, done)

        });


        // respond error code 403 forbidden (not authenticated user)

        it('respond error code 403 forbidden (not authenticated user)', (done) => {
            const data = {
                description: "test2",
            }
            request(app)
                .put('/transactions/1')
                .send(data)
                .auth('', { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(403, done)
        });

    });

    // testing delete transactions
    describe('DELETE /transactions/:id', () => {

        // should delete the Transaction to the database code 200
        it('delete the Transaction to the database code 200', (done) => {
            request(app)
                .delete('/transactions/1')
                .auth(token, { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(200, done)
        });
        // respond error code 404 Couldn't find a Transaction
        it("respond error code 404 Couldn't find a Transaction", (done) => {
            request(app)
                .delete('/transactions/x')
                .auth(token, { type: 'bearer' })
                .expect(404, done)

        });
        // respond error code 403 forbidden (not authenticated user)
        it("respond error code 403 forbidden (not authenticated user)", (done) => {
            request(app)
                .delete('/transactions/1')
                .auth("", { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(403, done)
        });
    });
});
