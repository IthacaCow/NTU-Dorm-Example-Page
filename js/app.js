angular.module('DNAApp', [
  'ngRoute',
  'DNAApp.table', 
  ] 

).config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
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
