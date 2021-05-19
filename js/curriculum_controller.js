angular.module('app').controller('curriculumController',['$scope',function($scope){
    $scope.experiencias = [
        {
            empresa:'BNAmericas',
            cargo:'Intern Data Science',
            fechas:'Ene.2020 - Mar.2020', 
            tareas:[
                "Desarrollo de Web Scrappers para obtener datos de contacto de empresas desde catálogos.",
                "Análisis de Web Logs para el cálculo de métricas de usabilidad de la plataforma",
                "Diseño de data warehouse para el almacenamiento de métricas de usabilidad",
                "Implementación del ETL de dicho data warehouse"
            ]
        },
        {
            empresa:'Banco Santander',
            cargo:'Practicante',
            fechas:'Ene. 2018 - Feb. 2018',
            tareas:[
                "Gestión y desarrollo de un prototipo de aplicación web, del tipo workflow, para la gestión de las distintas fases de las operaciones financieras del banco"
            ]
        },
        {
            empresa:'Universidad Técnica Federico Santa María',
            cargo:'Ayudante de Cátedra',
            fechas:'Sep. 2017 - Ago. 2020',
            tareas:[
                "Desarrollo de ayudantías de reforzamiento para el curso Investigación de operaciones",
                "Ayudante coordinador del equipo de ayudantes del curso Análisis y diseño de software. Corrector de evaluaciones y desarrollo de ayudantías de cátedra"
            ]
        }
    ]

    $scope.educacion = [
        {
            institucion:'Universidad Técnica Federico Santa María',
            grado:'Ingenería Civil Informática',
            fechas:'2014 - 2021'
        },
        {
            institucion:'Colegio Santa María de lo Cañas',
            grado:'Enseñanza Escolar Completa',
            fechas:'2002 - 2013'
        }
        
    ]
}]);