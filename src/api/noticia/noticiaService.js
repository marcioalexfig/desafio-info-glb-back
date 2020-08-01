const Noticia = require('./noticia')

Noticia.methods(['get', 'post', 'put', 'delete'])
Noticia.updateOptions({new: true, runValidators: true})

module.exports = Noticia