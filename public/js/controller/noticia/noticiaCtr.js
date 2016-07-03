/**
 * Created by IAndrade on 03/07/16.
 */
'use strict';

angular.module("app").controller("noticiaCtr", noticiaCtr);

function noticiaCtr(Restangular, $scope, $state, Tabela) {
    $scope.noticia = {titulo: "", texto: "", data: ""};
    $scope.tabela = new Tabela("/noticia");

    if ($state.params && $state.params.noticia) {
       // editar($state.params.noticia);
        $scope.noticia = $state.params.noticia;
    }

    function editar(id, c) {
        Restangular.one("/noticia", $state.params.id).get().then(function (noticia) {
            $scope.noticia = noticia;
        }).catch(function (e) {
            var a = e
        })
    }

    $scope.save = salvar;
    function salvar() {
        var resp;
        if($scope.noticia._id)
            resp = $scope.noticia.put();
        else
            resp = Restangular.all("/noticia").post($scope.noticia);

        resp.then(function () {
            $state.go("noticiaLista");
        })
    };
    $scope.novo = novo;
    function novo() {
        $state.go("noticia");
    }
    $scope.open = open;
    function open(noticia) {
        $state.go("noticia",{noticia:noticia});
    }


}
