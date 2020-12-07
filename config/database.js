const mongoose = require('mongoose');

const db = {
    host: process.env.MONGO_HOST || 'localhost',
    port: process.env.MONGO_PORT || 27017
};

const init = async () => {
    /* MONGOOSE SETUP */
    const connectionString = `mongodb://${db.host}:${db.port}/musicStore`;

    await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).catch(err => {
        console.log(`Error connecting to mongo ${connectionString}`);
    });
};


module.exports = {
    init
};
