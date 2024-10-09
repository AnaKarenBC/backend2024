const express = require ('express');

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
    /*
    validaciones

    -La información debe estar completa, si alguna de ellas no esta completa que mande un error (400)
    -El email debe de ser único de lo controrio debe de mandar un error (400)
    
    */
    usuarios.push({id: usuarios.length + 1, nombre, apellido, email})
    res.status(201).send("El usuario se agregó correctamente");
})


app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000/");
});