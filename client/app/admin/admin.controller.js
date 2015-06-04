'use strict';

angular.module('ngBlogApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User, Posts, resPost) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();
    $scope.posts = resPost.data;
    console.log($scope.posts);
    $scope.test ="#test";

    $scope.newPost = function() {
      console.log($scope.post);
      Posts.create($scope.post)
	.$promise.then(function() {
	  $scope.post.title = '';
	  $scope.post.body = '';
	});
    };

    $scope.delPost = function(post) {
      Posts.remove(post).$promise.then(function(data) {
	$scope.posts = data;
      });
    };
    
    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
	if (u === user) {
	  $scope.users.splice(i, 1);
	}
      });
    };
  });








