const fs = require('fs')

exports.database = function () {

    function readDatabase(){
        const data = JSON.parse(fs.readFileSync('database.json'));
        return data
    }

    function writeDatabase(data){
        fs.writeFileSync('database.json', JSON.stringify(data, null, 2))
    }

    return {
        listPeople: function () {            
            return readDatabase()
        },
        insertPerson: function (person) {
            const data = readDatabase()
            let nextId = 0;
            data.forEach(element => {
                if(nextId < element.id){
                    nextId = element.id
                }
            });
            nextId++
            person.id = nextId
            data.push(person);

            writeDatabase(data)
        }
    }
}