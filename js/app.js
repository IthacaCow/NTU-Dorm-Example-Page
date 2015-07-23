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
);
