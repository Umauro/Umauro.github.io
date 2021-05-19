var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl:"templates/about.html"
    })
    .when("/curriculum",{
        templateUrl:"templates/curriculum.html",
        controller:"curriculumController"
    })
    .when("/proyectos",{
        templateUrl:"templates/proyectos.html",
        controller:"proyectosController"
    })
});