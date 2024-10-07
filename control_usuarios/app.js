const express = require ('express');

const app = express()

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

//find --- endpoints
app.get("/usuarios/:id", (req, res) => {
    const {id} = req.params;
    
    const usuario = usuarios.find((usuario) => usuario.id === +id);
    res.status(200).send(usuario);
});



app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000/");
});