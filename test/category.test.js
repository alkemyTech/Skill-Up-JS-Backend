const { expect } = require('chai');
const request = require('supertest');
const { generateToken } = require("../helpers/tokensFunctions");
const app = require('../app');


describe('TEST categories', async () => {
    // generate token
     const token = await generateToken({
        "email":"test@test.com",
        "password":"123456"
        }) 
    // testing get all categories
    describe('GET /categories/', () => {
        // respond with a json containing a list of all categories
        it('respond with a json containing a list of all categories',  (done) => {

            request(app)
                .get('/categories')
                .auth(token, { type: 'bearer' })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done)
        });
    });
    // testing get a category
    describe('GET /categories/:id', () => {

        // respond whit a json containing a single category
        it('respond whit a json containing a single category', (done) => {
          request(app)
              .get('/categories/1')
              .auth(token, { type: 'bearer' })
              .set('Accept', 'application/json')
              .expect(200, done)
      });
        // respond error code 404 Couldn't find a category
        it("respond error code 404 Couldn't find a category", (done) => {
          request(app)
              .get('/categories/x')
              .auth(token, { type: 'bearer' })
              .set('Accept', 'application/json')
              .expect(404, done)

      });
        // respond error code 403 forbidden (not authenticated user)
        it("respond error code 403 forbidden (not authenticated user)", (done) => {
          request(app)
              .get('/categories/1')
              .auth("", { type: 'bearer' })
              .set('Accept', 'application/json')
              .expect(403, done)
      });

    }); 

    // testing create categories
    describe('POST /categories/', () => {
        // should save the category to the database code 200
        
        it('respond whit 200 Category created successfully', async () => {
          const data = {
              name: "prueba",
              description: "pruebaCategory"
          }
          const result = await request(app)
              .post('/categories/')
              .send(data)
              .auth(token, { type: 'bearer' })
              .set('Accept', 'application/json')
              .expect(200)
          expect(result.body.message).equal('Category created successfully')
      });


      // set data
        const data = [{
          name: "prueba"},{
          description: "pruebaCategory"
      }]

        // should respond error code 400 bad request (description)

        it('should respond error code 400 bad request (missing description)', (done) => {

           request(app)
              .post('/categories/')
              .send(data[0])
              .auth(token, { type: 'bearer' })
              .set('Accept', 'application/json')
              .expect(400,done)
          
      });
       
        // should respond error code 400 bad request (name) 

        it('should respond error code 400 bad request (missing name)', (done) => {

           request(app)
              .post('/categories/')
              .send(data[1])
              .auth(token, { type: 'bearer' })
              .set('Accept', 'application/json')
              .expect(400,done)
          
      });

        // respond error code 403 forbidden (not authenticated user)

        it('respond error code 403 forbidden (not authenticated user)',  (done) => {
          const data = {
              name: "prueba",
              description: "pruebaCategory"
          }
           request(app)
              .post('/categories/')
              .send(data)
              .auth('', { type: 'bearer' })
              .set('Accept', 'application/json')
              .expect(403,done)
      });

    }); 
    // testing update categories
    describe('PUT /categories/:id', () => {

        // should update the category to the database code 200

        it('respond whit 200 Category updated successfully', async () => {
          const data = {
              name: "prueba",
              description: "pruebaCategory"
          }
          const result = await request(app)
              .put('/categories/1')
              .send(data)
              .auth(token, { type: 'bearer' })
              .set('Accept', 'application/json')
              .expect(200)
          expect(result.body.message).equal('Category update successfully')
      });

    // respond error code 404 Couldn't find a category
    it("respond error code 404 Couldn't find a category", async () => {
      const data = {
          name: "prueba",
          description: "pruebaCategoryUpdate"
      }
      const result = await request(app)
          .put('/categories/x')
          .send(data)
          .auth(token, { type: 'bearer' })
          .set('Accept', 'application/json')
          .expect(404)
  });

      // set data
        const data = [{
          name: "prueba",description: ""},{
            name: "",description: "pruebaCategory"
      }]

        // should respond error code 400 bad request (name)

        it('should respond error code 400 bad request (missing description)', (done) => {

           request(app)
              .put('/categories/1')
              .send(data[0])
              .auth(token, { type: 'bearer' })
              .set('Accept', 'application/json')
              .expect(400,done)
          
      });
       
        // should respond error code 400 bad request (description) 

        it('should respond error code 400 bad request (missing description)', (done) => {

          request(app)
              .put('/categories/1')
              .send(data[1])
              .auth(token, { type: 'bearer' })
              .set('Accept', 'application/json')
              .expect(400,done)
          
      });

        // respond error code 403 forbidden (not authenticated user)

        it('respond error code 403 forbidden (not authenticated user)', async () => {
          const data = {
              name: "prueba",
              description: "pruebaCategory"
          }
          const result = await request(app)
              .put('/categories/1')
              .send(data)
              .auth('', { type: 'bearer' })
              .set('Accept', 'application/json')
              .expect(403)
      });

    });

    // testing delete categories
    describe('DELETE /categories/:id', () => {

        // should delete the category to the database code 200
        it('delete the category to the database code 200', (done) => {
          request(app)
              .delete('/categories/1')
              .auth(token, { type: 'bearer' })
              .set('Accept', 'application/json')
              .expect(200, done)
      });
        // respond error code 404 Couldn't find a category
        it("respond error code 404 Couldn't find a category", async () => {
         const result = await request(app)
              .delete('/categories/x')
              .auth(token, { type: 'bearer' })
              .expect(404)
              
      });
        // respond error code 403 forbidden (not authenticated user)
        it("respond error code 403 forbidden (not authenticated user)", (done) => {
          request(app)
              .delete('/categories/1')
              .auth("", { type: 'bearer' })
              .set('Accept', 'application/json')
              .expect(403, done)
      });
    }); 
});
