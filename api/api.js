const express = require('express');

const PeopleService = require('./people-service');
const peopleService = new PeopleService();
const app = express();

const v1 = express.Router();
app.use('/api/v1', v1);

v1.put('/people/:id', async (request, response) => {
    const id = request.params.id;
    const people = request.body;
    try {
        const result = await peopleService.updatePeople(id, people);
        !result.isFind ? response.sendStatus(404) : response.sendStatus(400);
        result.isModified ? response.sendStatus(200) : response.sendStatus(304);
    } catch(e){
        console.log('error occurs : ', e);
        response.sendStatus(400);
    }
});

v1.get('/people', async (request, response) => {

    const people = await peopleService.getPeople();
    response.setHeader('content-type', 'application/json');
    response.send(people);
})

v1.get('/people?gender=:gender', async (request, response) => {

    const gender = request.params.gender;
    try {
        const people  = await peopleService.getPeople(gender);

        people ? response.send(people) : response.sendStatus(404);
    } catch(e) {
        response.sendStatus(400);
    }
})



module.exports = app;
