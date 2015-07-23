'use strict';

var eventsURL = "./data/events.json";
var recordsInEventURL = "./data/record/";
var recordsURL = "./data/records" ;



var model = {
    nav_menu: [
	{ name: 'Quota',
	  type: 'toggle',
	  children:[
	      { 'name': '排名', type: 'link' },
	      { 'name': '日排名', type: 'link' }
	  ]
	}, 
	{ name: '異常',
	  type: 'toggle',
	  children:[
	      { 'name': '列表＆新增', type: 'link' },
	      { 'name': '歷史列表', type: 'link' },
	      { 'name': '未註冊列表', type: 'link' },
	      { 'name': '未註冊歷史列表', type: 'link' },
	      { 'name': '臨界值列表', type: 'link' }
	  ]
	},
	{ name: '權限',
	  type: 'toggle',
	  children:[
	      { 'name': '修改密碼與資料', type: 'link' }
	  ]
	},
	{ name: '住宿',
	  type: 'toggle',
	  children:[
	      { 'name': '暑宿搬遷列表&新增', type: 'link' }
	  ]
	},
	{ name: '同步',
	  type: 'toggle',
	  children:[
	      { 'name': 'Router', type: 'link' }
	  ]
	},
	{ name: 'IP, Mac對應表',
	  type: 'toggle',
	  children:[		      
	      { 'name': '列表&新增', type: 'link' },
	      { 'name': '未使用IP列表', type: 'link' },
	      { 'name': '申請列表', type: 'link' }		       
	  ]
	},
	{ name: 'VLAN',
	  type: 'toggle',
	  children:[		      
	      { 'name': 'DHCP查詢', type: 'link' }
	  ]
	},
	{ name: '組態',
	  type: 'toggle',
	  children:[		      
	      { 'name': 'MAC搜尋', type: 'link' },
	      { 'name': 'IP搜尋', type: 'link' }
	  ]
	},
	{ name: '登出',
	  type: 'link'
	}
    ]
};



signUpSheetApp.controller('navController', function ($scope) {
    $scope.nav_menu = model.nav_menu;
    $scope.now_selected_nav_index = -1;
    $scope.select = function ( ind ){
	if( $scope.now_selected_nav_index == ind ){
	    $scope.now_selected_nav_index = -1;
	}else{
	    $scope.now_selected_nav_index = ind;
	}
    };
});


//signUpSheetApp = angular.module('signUpSheetApp', ['ngRoute', 'signUpSheetControllers'] );



// signUpSheetApp.controller( 'EventsController',
// 	function ($scope, $routeParams, $http){


// 		$scope.routeParams = $routeParams;

// 		//Run callback function if success		       
// 		var updateEventModel = function(){
// 			$http.get(eventsURL).
// 				success(function(data, status, headers, config) {
// 					$scope.indexed_events = $scope.events || [];
// 					data.forEach(function(element, index, array ){
// 					   $scope.indexed_events[ String( element._id ) ] = element;
// 					});
// 					$scope.events = data;
// 				}).
// 				error(function(data, status, headers, config) {
// 					$scope.events = [];
// 				});
// 		};

// 		//Get event from event ID			       
// 		var getEvent = function ( eventID, events ){
// 			var event = events.find( function( element, index, array ){
// 				if( event._id == eventID ){
// 					return true;
// 				}else{
// 					false;
// 				}
// 			});
// 			return event;
// 		};
		
// 		$scope.setTitleWithEventTime = function (){
// 			if( $routeParams.eventId ){
// 				var event = getEvent( $routeParams.eventId, $scope.events );				
// 				$scope.title = event.start;
// 			}else{
// 				$scope.title = 'All';
// 			}			
// 		}

// 		updateEventModel( );
// 	}
	
// );



var signUpSheetControllers = angular.module('signUpSheetControllers', ['ngRoute']);

signUpSheetControllers.controller( 'SheetAllController',
	[ '$scope', '$http', function( $scope, $http ){
		
		$http.get( recordsURL ).
			success(function(data, status, headers, config) {
				$scope.records = data;
			}).
			error(function(data, status, headers, config) {
				$scope.records = [];
			});
		
	}]);


signUpSheetControllers.controller( 'SheetEventController',
	[ '$scope', '$routeParams', '$http', function( $scope, $routeParams, $http ){

		$scope.event = $routeParams.eventId;			       
		$http.get( recordsInEventURL + $scope.event ).
			success(function(data, status, headers, config) {
				$scope.records = data;
			}).
			error(function(data, status, headers, config) {
				$scope.records = [];
			});
		
	}]);
