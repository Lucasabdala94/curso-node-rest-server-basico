const express = require('express')
const cors = require('cors');

const  { dbConection } = require('../database/config');
class Server {
    constructor(){
        this.app = express(); 
        this.port = process.env.PORT; 
        this.usuariosPath='/api/usuarios';
        
        //Conectar a base de datos.
        this.conectarDB();
        
        //Middlewares
        this.middlewares();
        
        //rutas
        this.routes();
    }

    async conectarDB(){
        await dbConection();
        
    }


    middlewares(){
        //CORS
        this.app.use(cors())
        // lectura y parseo del body
        this.app.use(express.json());
        //Directorio publico
        this.app.use( express.static('public') )
    }

    routes(){
       this.app.use(this.usuariosPath,require('../routes/user'))        

    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Servidor corriendo en http://localhost:${this.port}/`)
        })        
    }
}

module.exports = Server;