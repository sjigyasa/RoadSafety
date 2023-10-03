const { Router } = require('express');
require('../db/conn');
const router = Router()

const {
    getTasks,
    registerTask,
    loginTask
} = require('../controllers/Tasks');

router.get('/get', getTasks);
router.post('/registerUser', registerTask);
router.post('/loginUser', loginTask);

module.exports = router;