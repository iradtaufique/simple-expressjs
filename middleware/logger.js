const moment = require('moment');


// creating middleware logger
const logger = (req, res, next) =>{
    // logging out the path name and date using moment module
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl} ${moment().format()}`);
    next();
};

module.exports = logger;