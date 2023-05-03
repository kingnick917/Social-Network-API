const router = require('express').Router();
const thoughtRoutes = require('./thoughts');
const userRoutes = require('./users');

router.use('/thought', thoughtRoutes);
router.use('/user', userRoutes);

module.exports = router;
