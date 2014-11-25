angular.module('StaffingUI').controller('SignupCtrl', function($scope, $location, AuthFactory) {
  'use strict';

  $scope.signup = function(credentials) {
debugger;
    AuthFactory.signup(credentials).success(function(response) {
      $location.path('/');
    });
  };

  $scope.goTologin = function(){
    $location.path('/login');
  };

});
