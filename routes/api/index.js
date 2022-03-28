const router = require('express').Router();

const thoughtRoutes = require('./thought-routes');

router.use('/thought', thoughtRoutes);

module.exports = router;