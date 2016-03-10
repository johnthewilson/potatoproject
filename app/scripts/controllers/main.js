'use strict';

/**
 * @ngdoc function
 * @name potatoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the potatoApp
 */
angular.module('potatoApp')
  .controller('MainCtrl', function (flickrFeed,$scope,$state) {

    flickrFeed.get().then(function(data){
      $scope.items=data;
      // go to listing
      $scope.goListing = function(item) {
        $state.go("child",{results: item});
        console.log(item);
      }


    })
  });
