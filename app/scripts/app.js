'use strict';

/**
 * @ngdoc overview
 * @name potatoApp
 * @description
 * # potatoApp
 *
 * Main module of the application.
 */
angular
  .module('potatoApp', [
    'ui.router',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider,$locationProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
      .state('home',{
        url:'/home',
            templateUrl: "views/main.html",
            controller: 'MainCtrl'


      })
      .state('child',{
        url:"/child",
          templateUrl: "views/child.html",
          controller:"ChildCtrl as child",
        params: {
          results: ""
        }
      });

  });
