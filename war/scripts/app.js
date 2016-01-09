'use strict';

angular
  .module('gaeTrainingApp', [
    'ngRoute',
    'factoryProvider',
    'commGet',
    'commPost'
  ])
  .config(function ($routeProvider) {
    $routeProvider

      .when('/addTraining.html', {
        templateUrl: 'views/addTraining.html',
        controller: 'TrainingCreateCtrl'
      })
      
         .when('/searchScreen.html', {
        templateUrl: 'views/searchScreen.html',
        controller: 'SearchCtrl'
      })
      
        .when('/searchResult.html', {
        templateUrl: 'views/searchResult.html',
        controller: 'SearchCtrl'
      })
         .when('/trainings', {
        templateUrl: 'views/trainingDetails.html',
        controller: 'SearchCtrl'
      })
      
       .when('/exercices/:exerciceTitle', {
        templateUrl: 'views/exerciceDetails.html',
        controller: 'exerciceDetailsCtrl'
      })
      
      .when('/trainings/:trainingTitle', {
        templateUrl: 'views/trainingDetails.html',
        controller: 'trainingDetailsCtrl'
      })
      
      .when('/trainingsByDomain/:trainingDomain', {
        templateUrl: 'views/searchResultByDomain.html',
        controller: 'trainingDomainCtrl'
      })
      
      .when('/', {
        templateUrl: 'views/welcomePage.html',
        controller: 'welcomeMsgCtrl'
      })

      .otherwise({
          redirectTo: '/'
        });
  });
