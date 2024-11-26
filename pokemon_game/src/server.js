const express = require('express');

class Server {
    constructor() {
        this.app = express();
        this.port = 3000

        this.middleware();
        this.routes();
    }

    middleware() {
        this.app.use(express.json());
    }

    routes(){

    }

    start(){
        this.app.listen(this.port, () =>{
            console.log(`Server is running on Port ${this.port}`);
        })
    }
}

module.exports = Server;