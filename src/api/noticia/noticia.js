const restful = require('node-restful')
const mongoose = restful.mongoose
const noticiaSchema = new mongoose.Schema({
    titulo: { type: String },
    conteudo: { type: String },
    datapublicacao: { type: Date, default: Date.now }
})
module.exports = restful.model('Noticia', noticiaSchema)