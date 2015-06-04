'use strict';

angular.module('ngBlogApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/admin', {
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl',
	resolve: {
	  resPost: ['$http', function($http) {
	    return $http.get('/api/posts/').success(function(data) {
	      return data.data;
	    });
	  }]
	}
      });
  });
