const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controller/user-controller');

//GET all users and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

//GET single user, PUT (update) users, and DELETE user
//api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

//POST and DELETE a friend
// /api/<userId>/friends/<friendsId>
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;
    