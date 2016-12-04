let path = require('path');
let rootPath = path.normalize(__dirname + '/../../');

const connectionStrings = {
    production: 'mongodb://ilian82:123456@ds113958.mlab.com:13958/proba-db',
    development: 'mongodb://localhost:27017/petshotel'
};

module.exports = {
    development: {
        rootPath: rootPath,
        db: connectionStrings.development,
        port: 3001
    },
    production: {
        rootPath: rootPath,
        db: connectionStrings.production,
        port: process.env.PORT || 3001
    }
};