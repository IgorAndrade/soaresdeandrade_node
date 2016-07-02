angular.module("app").directive("cabecalho", function() 
	{ return { templateUrl: '/views/directives/cabecalho.html' }; });

angular.module("app").directive("menuSimples",function () {
   return {templateUrl:'/views/directives/menu.html'}
});