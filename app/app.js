/**
 * Created by pkn on 9/21/15.
 */
(function(){
    "use strict";
    angular.module('myApp',["ui.router"])
        .config([ '$stateProvider', '$urlRouterProvider', function( $stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/main");

            $stateProvider
                .state("base", {
                    url : "/main" ,
                    templateUrl : "partials/base.html",
                    controller : "baseController as bc"
                })

        }])
})()