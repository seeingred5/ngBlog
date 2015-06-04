'use strict';

angular.module('ngBlogApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
	resolve: {
	  resPost: ['$http', function($http) {
	    return $http.get('/api/posts/').success(function(data) {
	      return data.data;
	    });
	  }]
	}
      });
  })
  .factory('Posts', function($http, $resource) {
    return $resource('/api/posts/', {}, {
      'query': { method: 'GET', isArray: true},
      'create': { method: 'POST'}
    });
  });
