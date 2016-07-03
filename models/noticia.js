
module.exports = function(){
    var findOrCreate = require('mongoose-findorcreate')
    var db = require('mongoose');

    var noticia = db.Schema({
        titulo:{type: String, required: [true,"Titulo é obrigatório"]},
        texto:String,
        data:{ type: Date, default: Date.now }
    });
    noticia.plugin(findOrCreate);

    return db.model('noticia',noticia);
}