const { expect } = require('chai');
const request = require('supertest');
const { generateToken } = require("../helpers/tokensFunctions");
const app = require('../app');


describe('TEST users', async () => {
    // generate token
    const token = await generateToken({
        "email": "test12345@test.com",
        "password": "123456"
    })
    // testing get all users
    describe('GET /users/', () => {
        // respond with a json containing a list of all users
        it('respond with a json containing a list of all users', (done) => {

            request(app)
                .get('/users')
                .auth(token, { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done)
        });
    });
    // testing get a User
    describe('GET /users/:id', () => {

        // respond whit a json containing a single User
        it('respond whit a json containing a single User', (done) => {
            request(app)
                .get('/users/1')
                .auth(token, { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(200, done)
        });
        // respond error code 404 Couldn't find a User
        it("respond error code 404 Couldn't find a User", (done) => {
            request(app)
                .get('/users/x')
                .auth(token, { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(404, done)

        });
        // respond error code 403 forbidden (not authenticated user)
        it("respond error code 403 forbidden (not authenticated user)", (done) => {
            request(app)
                .get('/users/1')
                .auth("", { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(403, done)
        });

    });

    // testing create users
    describe('POST /users/', () => {
        // should save the User to the database code 200

        it('respond whit 200 User created successfully', async () => {
            const data = {
                firstName: "test", 
                lastName : "test", 
                email: "test121@test.com", 
                password: "123456",
            }
            const result = await request(app)
                .post('/users/')
                .send(data)
                .auth(token, { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(200)
            expect(result.body.message).equal('User created successfully')
        });


        // set data
        const dataPost = [{firstName: "", lastName : "test",email: "testX@test.com", password: "123456"},
        {firstName: "test", lastName : "",email: "testX2@test.com", password: "123456"},
        {firstName: "test", lastName : "test", password: "123456"},
        {firstName: "test", lastName : "test", email: "testX3@test.com",password: ""},
        {firstName: "test", lastName : "test", email: "testX4jn@test.com", password: "1234"},
        {firstName: "test", lastName : "test",email: "test@test.com", password: "123456"},]

        // should respond error code 400 bad request (firstName)

        it('should respond error code 400 bad request (missing firstName)', async () => {

            const result = await request(app)
                .post('/users/')
                .send(dataPost[0])
                .auth(token, { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(400)

        });


        // should respond error code 400 bad request (lastName)

        it('should respond error code 400 bad request (missing lastName)', async () => {

            const result = await request(app)
                .post('/users/')
                .send(dataPost[1])
                .auth(token, { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(400)

        });


        // should respond error code 400 bad request (email) 

        it('should respond error code 400 bad request (missing email)', async () => {

            const result = await request(app)
                .post('/users/')
                .send(dataPost[1])
                .auth(token, { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(400)

        });

        // should respond error code 400 bad request (password) 

        it('should respond error code 400 bad request (missing password)', async () => {

            const result = await request(app)
                .post('/users/')
                .send(dataPost[1])
                .auth(token, { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(400)

        });

                // should respond error password minimun Length is 6 

                it('should respond error password minimun Length is 6', async () => {

                    const result = await request(app)
                    .post('/users/')
                    .send(dataPost[1])
                    .auth(token, { type: 'bearer' })
                    .set('Accept', 'application/json')
                    .expect(400)
        
                });

                // should respond Error the email: X already exist 

                it('should respond Error the email: X already exist', async () => {

                    const result = await request(app)
                    .post('/users/')
                    .send(dataPost[1])
                    .auth(token, { type: 'bearer' })
                    .set('Accept', 'application/json')
                    .expect(400)
        
                });

        // respond error code 403 forbidden (not authenticated user)

        it('respond error code 403 forbidden (not authenticated user)', (done) => {
            const data = {
                firstName: "test", 
                lastName : "test", 
                email: "testXX1@test.com", 
                password: "123456",
            }
            request(app)
                .post('/users/')
                .send(data)
                .auth('', { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(403, done)
        });

    });
    // testing update users
    describe('PUT /users/:id', () => {

        // should update the User to the database code 200

        it('respond whit 200 User updated successfully', (done) => {
            const data = {"firstName": "test", "lastName" : "test","email": "test3X@test.com", "password": "123456"}
                 request(app)
                    .put('/users/2')
                    .send(data)
                    .auth(token, { type: 'bearer' })
                    .set('Accept', 'application/json')
                    .expect(200,done)
        });

                // should update the User to the database code 404

                it('respond whit 404 user not found', async () => {
                    const dataPut = {"firstName": "test", "lastName" : "test","email": "test3X@test.com", "password": "123456"}
                    const result = await request(app)
                        .put('/users/x')
                        .send(dataPut)
                        .auth(token, { type: 'bearer' })
                        .set('Accept', 'application/json')
                        .expect(404)
                });

        // set data
        const dataPut = [{firstName: "", lastName : "test",email: "test2X@test.com", password: "123456"},
        {firstName: "test", lastName : "",email: "test2X2@test.com", password: "123456"},
        {firstName: "test", lastName : "test", password: "123456"},
        {firstName: "test", lastName : "test", email: "test2X3@test.com",password: ""},
        {firstName: "test", lastName : "test", email: "test2X4jn@test.com", password: "1234"},
        {firstName: "test", lastName : "test",email: "test@test.com", password: "123456"},]

        // should respond error code 400 bad request (firstName)

        it('should respond error code 400 bad request (missing firstName)', async () => {

            const result = await request(app)
                .put('/users/1')
                .send(dataPut[0])
                .auth(token, { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(400)

        });


        // should respond error code 400 bad request (lastName)

        it('should respond error code 400 bad request (missing lastName)', async () => {

            const result = await request(app)
                .put('/users/1')
                .send(dataPut[1])
                .auth(token, { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(400)

        });


        // should respond error code 400 bad request (email) 

        it('should respond error code 400 bad request (missing email)', async () => {

            const result = await request(app)
                .put('/users/1')
                .send(dataPut[1])
                .auth(token, { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(400)

        });

        // should respond error code 400 bad request (password) 

        it('should respond error code 400 bad request (missing password)', async () => {

            const result = await request(app)
                .put('/users/1')
                .send(dataPut[1])
                .auth(token, { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(400)

        });

                // should respond error password minimun Length is 6 

                it('should respond error password minimun Length is 6', async () => {

                    const result = await request(app)
                    .put('/users/1')
                    .send(dataPut[1])
                    .auth(token, { type: 'bearer' })
                    .set('Accept', 'application/json')
                    .expect(400)
        
                });

                // should respond Error the email: X already exist 

                it('should respond Error the email: X already exist', async () => {

                    const result = await request(app)
                    .put('/users/1')
                    .send(dataPut[1])
                    .auth(token, { type: 'bearer' })
                    .set('Accept', 'application/json')
                    .expect(400)
        
                });

        // respond error code 403 forbidden (not authenticated user)

        it('respond error code 403 forbidden (not authenticated user)', (done) => {
            const data = {
                firstName: "test", 
                lastName : "test", 
                email: "testXX12@test.com", 
                password: "123456",
            }
            request(app)
                .put('/users/1')
                .send(data)
                .auth('', { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(403, done)
        });
    });

    // testing delete users
    describe('DELETE /users/:id', () => {

        // should delete the User to the database code 200
        it('delete the User to the database code 200', (done) => {
            request(app)
                .delete('/users/1')
                .auth(token, { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(200, done)
        });
        // respond error code 404 Couldn't find a User
        it("respond error code 404 Couldn't find a User", (done) => {
            request(app)
                .delete('/users/x')
                .auth(token, { type: 'bearer' })
                .expect(404, done)

        });
        // respond error code 403 forbidden (not authenticated user)
        it("respond error code 403 forbidden (not authenticated user)", (done) => {
            request(app)
                .delete('/users/1')
                .auth("", { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect(403, done)
        });
    });
});
