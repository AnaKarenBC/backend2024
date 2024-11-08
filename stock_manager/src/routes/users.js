const { Router } = require('express');
const { getAllUsers, getUserById, createUser, updateUser, updateUserComplete } = require('../controllers/users');

const router = Router();

router.get('/', getAllUsers); // Obtener todos los usuarios
router.get('/:id', getUserById); // Obtener un usuario por ID
router.post('/', createUser); // Crear un nuevo usuario

// Actualizar un usuario existente parcialmente
router.put('/:id', updateUser); 

// Eliminar un usuario existente
// router.delete('/:id', deleteUser); // Agregar esta línea si tienes una función deleteUser

module.exports = router;
