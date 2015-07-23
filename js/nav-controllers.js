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



 angular.module('DNAApp').controller('navController', function ($scope) {
    $scope.nav_menu = model.nav_menu;
    $scope.now_selected_nav_index = -1;
    $scope.select = function ( ind ){
	if( model.now_selected_nav_index == ind ){
	    $scope.now_selected_nav_index = -1;
	}else{
	    $scope.now_selected_nav_index = ind;
	}
    };
});



