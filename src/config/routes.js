const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // Noticia Routes
    const noticiaService = require('../api/noticia/noticiaService')
    noticiaService.register(router, '/noticias')
}