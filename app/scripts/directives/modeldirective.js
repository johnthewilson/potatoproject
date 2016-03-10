'use strict';

/**
 * @ngdoc directive
 * @name potatoApp.directive:modelDirective
 * @description
 * # modelDirective
 */
angular.module('potatoApp')
  .directive('modelDirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the modelDirective directive');
      }
    };
  });
