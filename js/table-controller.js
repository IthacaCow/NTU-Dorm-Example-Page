
( function(){
  /*
  var fields = {
    identity:'身份',
    name:'姓名',
    account:'帳號',
    email:'E-mail',
    dorm:'宿舍',
    room:'房號',
    MAC:'MAC 卡號',
    phone:'電話',
    IP:'IP' 
  };
  */
  var field_name = [
    '身份',
    '姓名',
    '帳號',
    'E-mail',
    '宿舍',
    '房號',
    'MAC 卡號',
    '電話',
    'IP' 
  ];
 var field_key = [
    "identity",
    "name",
    "account",
    "email",
    "dorm",
    "room",
    "MAC",
    "phone",
    "IP",
  ];




  angular.module('DNAApp.table',['angularUtils.directives.dirPagination'])

  .controller('tableController', ['$scope','$http', function($scope,$http) {

    $scope.query = {};
    $scope.search_field = '$';
    $scope.field_name = field_name;
    $scope.field_key = field_key;
    $scope.usersData = [];
    $http.get('./data/users.json').success(function(data, status, headers, config){
      $scope.usersData = angular.fromJson(data);
    });

 
  }]);

 



})();
