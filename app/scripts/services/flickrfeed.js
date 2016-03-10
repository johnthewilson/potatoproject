'use strict';

/**
 * @ngdoc service
 * @name potatoApp.flickrFeed
 * @description
 * # flickrFeed
 * Service in the potatoApp.
 */
angular.module('potatoApp')
  .factory('flickrFeed', function ($http,$q) {

    var deferred=$q.defer();
    return {

      get:function(){

        //$http.jsonp("https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK",function(data){
        //    console.log(data);
        //  console.log("reaches here ");
        //   deferred.resolve(data);
        //  },
        //function(error){
        //  console.log("reacjs error");
        //  deferred.reject(error);
        //}
        //);
        $http.jsonp("https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK")
        .success(function (data) {
          console.log(data.items);
          deferred.resolve(data.items);
        });
        return deferred.promise;
    }

    }
  });
