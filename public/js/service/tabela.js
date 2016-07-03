/**
 * Created by IAndrade on 03/07/16.
 */
(function() {
    'use strict';

    angular.module('app').factory("Tabela", navaTabela);

    function navaTabela(NgTableParams,$q,Restangular) {
        return function NovaTabela(url){
            var tabela = new NgTableParams({
                    count: 10
                }, {
                    counts: [5,10,15,20,50],
                    getData: getData,
                    paginationMaxBlocks: 5,
                    paginationMinBlocks: 2
                }
            );

            function getData(param){
                var q={
                    pg:param.page()-1,
                    qtd:param.count(),
                    filter:param.filter(),
                    sort:param.sorting()
                };
                var deferred = $q.defer();
              //  Restangular.all(url).customGET(null,q,null).then(
                Restangular.all(url).getList(q).then(
                    function(result) {

                        param.total(result.length);
                        deferred.resolve(result);
                    }).catch(function(e){
                    deferred.resolve([]);
                });
                return deferred.promise;
            };

            return tabela;

        }
    }

})();