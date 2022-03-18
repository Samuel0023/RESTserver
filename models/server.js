const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.port;
        //middlewares
        this.middlewares();
        //app routes
        this.routes();
    }

    middlewares() {
        //cors
        this.app.use(cors());
        //dir public
        this.app.use(express.static('public'));

    }

    routes() {
        this.app.get('/', (req, res) => {
            res.send('hello world');
        });
        this.app.get('/api', (req, res) => {
            res.status(200).json({
                msg: 'get API'
            })
        });
        this.app.put('/api', (req, res) => {
            res.status(200).json({
                msg: 'put API'
            })
        });
        this.app.post('/api', (req, res) => {
            res.status(200).json({
                msg: 'post API'
            })
        });
        this.app.delete('/api', (req, res) => {
            res.status(200).json({
                msg: 'delete API'
            })
        });
    }

    listen() {

        this.app.listen(this.port, () => {
            console.log('servidor corriendo en puerto ', this.port);
        });
    }
}

module.exports = Server;