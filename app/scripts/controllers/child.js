'use strict';

/**
 * @ngdoc function
 * @name potatoApp.controller:ChildCtrl
 * @description
 * # ChildCtrl
 * Controller of the potatoApp
 */
angular.module('potatoApp')
  .controller('ChildCtrl', function ($stateParams,$scope) {
    $scope.result = $stateParams.results;
  });
