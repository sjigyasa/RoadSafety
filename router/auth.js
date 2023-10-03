const { Router } = require('express');
require('../db/conn');
const router = Router()

const {
    registerTask,
    loginTask
} = require('../controllers/Tasks');

router.post('/registerUser', registerTask);
router.post('/loginUser', loginTask);

module.exports = router;
