//connects to routers
const router = require('express').Router();
const userRoutes = require('./userRoutes');

// add prefix of `/users` to routes created in `userRoutes.js`
router.use('/users', userRoutes);

module.exports = router;