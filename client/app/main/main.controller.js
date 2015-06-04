'use strict';

angular.module('ngBlogApp')
  .controller('MainCtrl', function ($scope, $http, resPost) {

    $scope.posts = resPost.data;

  });
