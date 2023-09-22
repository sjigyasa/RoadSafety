const { Router } = require('express');
require('../db/conn');
const router = Router()

const {
    registerTask,
    loginTask,
    submitForm } = require('../controllers/Tasks');

router.post('/registerUser', registerTask);
router.post('/loginUser', loginTask);
router.post('/contactUser', submitForm);

module.exports = router;