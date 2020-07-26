var express = require('express');
var router = express.Router();
var estudianteControllers = require('../controllers/estudiante');

router.get('/', estudianteControllers.estudiante_list);
router.get('/create', estudianteControllers.estudiante_create_get);
router.post('/create', estudianteControllers.estudiante_create_post);
router.get('/:id/update', estudianteControllers.estudiante_update_get);
router.post('/:id/update', estudianteControllers.estudiante_update_post);
router.post('/:id/delete', estudianteControllers.estudiante_delete_post);

module.exports = router;