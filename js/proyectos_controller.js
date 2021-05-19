angular.module('app').controller('proyectosController',['$scope',function($scope){
    $scope.proyectos_universitarios = [
        {
            titulo:'LensGen: Generador de lentes artificiales de lentes gravitacionales via GANS',
            contexto:'Memoria de título',
            fechas:'Abr. 2020 - Ene. 2021',
            descripcion:'Uso de Deep Convolutional Adversarial Networks (DC-GAN) para la generación de imágenes de lentes gravitacionales fuertes del tipo Galaxia-Galaxia.',
            tareas:[
                'Implementación de la DCGAN en Keras. Réplica de redes clasificadoras del estado del arte para su utilización en la fase de validación.',
                'Diseño de experimentos para la validación de los resultados obtenidos, en conjunto a sus mecanismos de evaluación.'
            ],
            links_utiles:[
                {
                    tipo:'github',
                    nombre:'Keras version',
                    url:'https://github.com/Umauro/lensgen_keras'
                },
                {
                    tipo:'github',
                    nombre:'Pytorch version',
                    url:'https://github.com/Umauro/lensgen_pytorch'
                },
                {
                    tipo:'youtube',
                    nombre:'Defensa memoria',
                    url:'https://www.youtube.com/watch?v=n5wXqbQrQdk&ab_channel=DepartamentodeInform%C3%A1ticaUTFSM'
                }
            ]
        },
        {
            titulo:'DropoutForecast',
            contexto:'Proyecto Feria de Software',
            fechas:'Mar.2019 - Mar.2020',
            descripcion:'Prototipo de aplicación web para la predicción de la deserción en educación superior, utilizando Machine Learning.',
            tareas:[
                'Encargado del modelo predictivo y del desarrollo del Back-End de la aplicación.'
            ],
            links_utiles:[
                {
                    tipo:'youtube',
                    nombre:'Video presentación',
                    url:'https://www.youtube.com/watch?v=1-C1GdtRBM8&list=PLIQP8agPi-1VfylWTj2KTTsyv_UW5Q83-&index=4&ab_channel=DepartamentodeInform%C3%A1ticaUTFSMDepartamentodeInform%C3%A1ticaUTFSM'
                }
            ]
        }
    ]
    $scope.otros_proyectos = [
        {
            titulo:'NLP classification practice',
            contexto:'Proyecto Personal',
            fechas:'May. 2021 - En desarrollo',
            descripcion:'Proyecto personal para aprendender a utilizar la librería Transformers de Hugging Face, Pytorch Lightning. La idea es hacer análisis de sentimientos de tweets sobre el corona virus para así practicar clasificación sobre texto.',
            tareas:[
                'Pequeño análisis exploratorio de datos.',
                'Creación de script para el pre-procesamiento del texto.',
                'Tokenización de tweets utilizando los Tokenizers implementados en Transformers.',
                'Implementación de un modelo de clasificación con Pytorch Lightning, utilizando BERT (más que nada para aprender como utilizarlos).',
                'Creación de script para el entrenamiento del modelo.',
                'Experimentos y resultados aún en desarrollo c:.'
            ],
            links_utiles:[
                {
                    tipo:'github',
                    nombre:'Repositorio',
                    url:'https://github.com/Umauro/NLP_classification_practice'
                },
                {
                    tipo:'sitio',
                    nombre:'Dataset',
                    url:'https://www.kaggle.com/datatattle/covid-19-nlp-text-classification'
                }
            ]
        }
    ]
}]);