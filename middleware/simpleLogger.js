const chalk = require('chalk');

const simpleLogger = function (req, res, next) {

    res.on('finish', function() {
        const code = chalk.green(this.statusCode);
        console.log(`${req.method} ${req.originalUrl} ${code}`);
    });

    next();
};

module.exports = simpleLogger;
