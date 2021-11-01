const Express = require('express');
const controller = require('./controllers');
const router = Express.Router();

router.get('/:countryCode', controller.findPath);

module.exports = router;