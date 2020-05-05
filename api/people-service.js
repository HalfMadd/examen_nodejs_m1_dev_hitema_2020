const fs = require('fs');

module.exports = class PeopleService {
    constructor() {
        this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
    }

    updatePeople(id, people) {
        this.peoples[id].name = people;
    }
    
    getPeople(filters) {
        if(filters === '') return this.peoples.find().toArray();

        if(filters !== '') return this.peoples[filters];

    }
}
