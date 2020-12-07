module.exports = {
    username: process.env.MONGO_INITDB_ROOT_USERNAME,
    password: process.env.MONGO_INITDB_ROOT_PASSWORD,
    host: process.env.MONGO_HOST || 'localhost',
    port: process.env.MONGO_PORT || 27017
};
