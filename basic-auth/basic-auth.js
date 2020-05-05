const crypto = require('crypto');


function sha1Encode(data) {
    //instance
    hash = crypto.createHash('sha1');
    hash.update(data);
    return hash.digest('hex');
}


module.exports.digestAuth = (request, response, next) => {
    const authorization = request.headers.authorization;
    console.log('authorization, ', authorization);

    const encoded = authorization.replace('Basic ', '');
    //console.log(encoded);
    const decoded = Buffer.from(encoded, 'base64').toString('utf8');
    //console.log(decoded);

    const authentication = decoded.split(':');

    //password en sha1
    authentication[1] = sha1Encode(authentication[1]);
    console.log(authentication[1]);

    const isValid = authentication[0] === 'node' && authentication[1] === '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8';
    
    isValid ? next() : response.sendStatus(401);
}