const fs = require('fs');
const util = require('util');

const readPromise = util.promisify(fs.readFile);

module.exports.decodeHexFileContent = (filePath) =>  {
    return new Promise((resolve, reject) => {
        readPromise(filePath, 'hex', function(err, data){
            
        });
        resolve();
    });
}
