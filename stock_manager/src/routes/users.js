const {Router} = require('express');
const {getAll, getById, createUser, updateUser} = require('../controllers/users');

const router = Router();

router.get('/', getAll);
router.get('/:id', getById);

//Agregar un usuario nuevo
router.post('/', createUser);
//Actualizar un usuario nuevo
router.put('/:id', updateUser);
//Eliminar un usuario nuevo

module.exports = router;