const { Router } = require('express');
const router = Router();

const { getPeoples, createPeoples, getPeoplesById, deletePeoples, updatePeoples } = require('../controllers/index.controller')

router.get('/peoples', getPeoples);
router.post('/peoples', createPeoples);
router.get('/peoples/:id', getPeoplesById);
router.delete('/peoples/:id', deletePeoples);
router.put('/peoples/:id', updatePeoples)

module.exports = router;