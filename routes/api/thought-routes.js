const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require('../../controller/thought-controller');

//Set up GET all and POST at /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// Set up GET one, PUT, and DELETE at /api/thought/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;