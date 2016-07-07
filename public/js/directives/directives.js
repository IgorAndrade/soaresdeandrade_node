angular.module("app").directive("cabecalho", function() 
	{ return { templateUrl: '/views/directives/cabecalho.html' }; })
    .directive("rodape", function()
    { return { templateUrl: '/views/directives/rodape.html' }; })
.directive("menuSimples",function () {
   return {templateUrl:'/views/directives/menu.html'}
});