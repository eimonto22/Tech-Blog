const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// Prefix all routes defined in the /api folder with /api
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;