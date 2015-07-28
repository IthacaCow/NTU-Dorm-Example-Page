angular.module('DNAApp', [
  'ngRoute',
  'DNAApp.table', 
  ] 

).config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.
      when('/', {
        templateUrl: './partials/main.html',
        controller: 'mainController'  
      }).
      when('/users', {
        templateUrl: './partials/table.html',
        controller: 'tableController'
      }).
      otherwise({
        redirectTo: '/users'
      });
  }]
).run(function ($rootScope,$timeout) {
        $rootScope.$on('$viewContentLoaded', () => {
          $timeout(() => {
            componentHandler.upgradeAllRegistered();
          })
        })
      });

 angular.module('app', [])
        .run(function ($rootScope) {
            $rootScope.$on('$viewContentLoaded', ()=> {
              $timeout(() => {
                componentHandler.upgradeAllRegistered();
              })
            })});