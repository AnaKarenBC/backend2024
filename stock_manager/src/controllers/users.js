const {request, response} = require('express');

const users = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Jane'},
        {id: 3, name: 'Peter'},
];

const getAll = (req=request, res=response) => {
        res.send(users);
}

const getById = (req=request, res=response) => {
        const {id} = req.params;
        
        if(isNaN(id)) {
            res.status(400).json({msg: 'Invalid ID'});
            return;
        }

        const user = users.find(user => user.id === +id);

        if(!user) {
            res.status(404).json({msg: 'User not found bruh'});
            return;
        }

        res.send(user);
}

// hacer enpoints para crear, borrar y editar usuarios 
//Agregar nuevo usuario
const createUser = (req=request, res=response) => {
    const {name} = req.body;

    if(!name){
        res.status(400).send("Bad request. The Name field is missing.");
        return;
    }
    const user = users.find(user => user.name === name)

    if(user){
        res.status(409).send('user already existis');
        return;
    }

    user.push({id: users.length +1, name});
    res.send("User created succesfully");
}

//Actualizar usuario
const updateUser = (req=request, res=response) => {

    if(isNaN(id)) {
        res.status(400).json({msg: 'Invalid ID'});
        return;
    }

    const user = users.find(user => user.id === +id);

    if(!user) {
        res.status(404).json({msg: 'User not found bruh'});
        return;
    }

    user.forEach(user => {
        if(user.id === +id){
            user.name = name;
        }
    });
    res.send("User Updated succesfuly");
}

//Eliminar un usuario
const deleteUser = (req=request, res=response) => {
    
}

module.exports = {getAll, getById, createUser, updateUser};