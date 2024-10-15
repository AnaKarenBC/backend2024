const express = require ('express');
const req = require('express/lib/request');
const res = require('express/lib/response');

const app = express()

app.use(express.json());

const usuarios = [
    {
        id: 1,
        nombre: "Juan",
        apellido: "Perez",
        email: "juanperez@gmail.com"
    },
    {
        id: 2,
        nombre: "Pepe",
        apellido: "Martinez",
        email: "pepemartinez@gmail.com"
    }
]

app.get("/usuarios", (req, res) => {

    res.status(200).send({usuarios});
})
//para solo visualizar un usuario
// app.get("/usuarios/1", (req, res) => {
//     res.status(200).send(usuarios[0]);
// });
//solo imprime el primero, con la palabra id logramos reducir
//lineas de codigo, y solamente nos imprime el que le indicamos 
//en el arreglo.

//find --- end points
app.get("/usuarios/:id", (req, res) => {
    const {id} = req.params;
    //console.log(typeof id); // me dice que es un string
    //cuando se coloca el simbolo + es para comvertirlo en numero
    //console.log(typeof +id) // me dice que es un numero
    if(isNaN(id)){
        res.status(400).send({error: "El id debe de ser un número"});
        return;
    } 

    const usuario = usuarios.find((usuario) => usuario.id === +id);
    if(usuario === undefined){
        //res.status(400).send({error: "Usuario no encontrado"}); //mensaje sencillo
        res.status(400).send({error: `El usuario con id ${id} no existe`})
        return;
    }
    res.status(200).send(usuario);
});
//End point
//para agregar un elemento nuevo se ocupa post

app.post("/usuarios", (req, res) => {
    //console.log(req.body);
    const {nombre, apellido, email} = req.body;
    /*---TAREA----
    validaciones

    -La información debe estar completa, si alguna de ellas no esta completa que mande un error (400)
    -El email debe de ser único de lo controrio debe de mandar un error (400)
    
    */
    // Validación: La información debe estar completa
    if (!nombre || !apellido || !email) {
        res.status(400).send({error: "La información está incompleta. Todos los campos son obligatorios."});
        return;
    }

    // Validación: El email debe ser único
    const emailExistente = usuarios.find(usuario => usuario.email === email);
    if (emailExistente) {
        res.status(400).send({error: "El email ya está en uso. Por favor, utilice otro email."});
        return;
    }
        if(usuario === undefined){
        //res.status(400).send({error: "Usuario no encontrado"}); //mensaje sencillo
        res.status(400).send({error: `El usuario con id ${id} no existe`})
        return;
    }
    res.status(200).send(usuario);

    usuarios.push({id: usuarios.length + 1, nombre, apellido, email})
    res.status(201).send("El usuario se agregó correctamente");
})
//validar que no nos repitan el correo, ojo debemos descartar el caso cuando el correo de ese usuario no se actualize
//lo que quiero es que cuando se actualizen todos los campos y el correo no, me permita guardar todos los campos

app.put("/usuarios/:id",(req, res) =>{
    
    const {nombre, apellido, email} = req.body;
    const id= +req.params.id;
    if (!nombre || !apellido || !email) {
        res.status(400).send({error: "La información está incompleta. Todos los campos son obligatorios."});
        return;
    }

    if(isNaN(id)){
        res.status(400).send({error: "El id debe de ser un número"});
        return;
    }

    const usuario = usuarios.find((usuario) => usuario.id === +id);
    if(usuario === undefined){
        //res.status(400).send({error: "Usuario no encontrado"}); //mensaje sencillo
        res.status(400).send({error: `El usuario con id ${id} no existe`})
        return;
    }

    usuarios.forEach((usuarios) =>{
        if(usuario.id === id){
            usuario.nombre = nombre;
            usuario.apellido = apellido;
            usuario.email = email;
        }
    })
    res.status(200).send("El usuario se actualizó correctamente");
})

app.patch("/usuario/:id",(req, res) =>{

})

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000/");
});