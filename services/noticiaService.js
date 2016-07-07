/**
 * Created by IAndrade on 02/07/16.
 */
module.exports = function (app) {

    var Modelo = app.models.noticia;
    var service;
    service = {
        inserir: function (req, res, next) {
            var model = new Modelo(req.body);
            model.save(function (erro, model) {
                if (erro)
                    res.status(412).json({"error": erro});
                else {
                    res.status(200).json(model);
                }
            });
        },
        listar: function (req, res, next) {

            var filter = JSON.parse(req.query.filter || "{}");
            var pg=req.query.pg || 0;
            pg=parseInt(pg);
            var qtd=req.query.qtd || 5;
            qtd=parseInt(qtd);
            if(filter && filter.titulo=="")
                delete filter.titulo;
            //else if(filter && filter.titulo)
            //    filter.titulo="/"+filter.titulo+"/";

            var sort = JSON.parse(req.query.sort|| "{}");
            Modelo.find(filter).sort(sort).skip(pg).limit(qtd).exec(function (erro, lista,total) {
                if (erro)
                    res.status(412).json({"error": erro});
                else {
                    res.status(200).json(lista);
                }
            });
        },
        update: function (req, res, next) {
            var obj = req.body;
            Modelo.update({_id:req.params.id},{ $set: obj},function (erro, modelo) {
                if (erro)
                    res.status(412).json({"error": erro});
                else {
                    res.status(200).json(modelo);
                }
            });
        },
        deletar: function (req, res, next) {
            Modelo.findByIdAndRemove(req.params.id, function(erro, model){
                if (erro)
                    res.status(412).json({"error": erro});
                else {
                    res.status(200).json("ok");
                }
            });
        }
    };

    app.post('/services/noticia', service.inserir);
    app.get('/services/noticia', service.listar);
    app.put('/services/noticia/:id', service.update);
    app.delete('/services/noticia/:id', service.deletar);
    return service;
}