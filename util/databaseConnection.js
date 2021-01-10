const mongoose = require("mongoose");

const initDB = async () => {
    await mongoose.connect(`${process.env.DB_PROVIDER}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
        useNewUrlParser: true,
    }).then(() => {
        console.log('Connected successfully to DB');
    }).catch((error) => {
        console.log('Error!: ' + error);
    });
};

module.exports = initDB;
