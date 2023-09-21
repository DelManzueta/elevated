const morgan = require('morgan');

// Configure Morgan for logging HTTP requests
const logger = morgan('combined');

module.exports = logger;
