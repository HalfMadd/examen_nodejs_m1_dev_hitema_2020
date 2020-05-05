const fs = require("fs");

module.exports.decodeHexFileContent = (filePath) => {
    return new Promise((resolve, reject) => {
    try {
        const file = fs.readFileSync(filePath).toString();
        const hexToString = Buffer.from(file, 'hex').toString('utf8');
        resolve(hexToString);
    } catch (exception) {
        reject(exception);
    }
  });
};