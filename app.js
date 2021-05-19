var app = angular.module("app", ["ngRoute"]);

app.component('navbar',{
    templateUrl:'templates/navbar.html'
});


app.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl:"templates/about.html",
        controller:"aboutController"
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