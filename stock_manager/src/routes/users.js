const {Router} = require('express');
const {getAllUsers, getUserById, createUser, updateUser} = require('../controllers/users');

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);

//Agregar un usuario nuevo
router.post('/', createUser);
//Actualizar un usuario nuevo
router.put('/:id', updateUser);
//Eliminar un usuario nuevo

module.exports = router;