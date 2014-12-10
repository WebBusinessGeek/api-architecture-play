/**
 * Created by MacBookEr on 12/10/14.
 */
angular.module('app')
    .controller('userLoginController', ['$scope','userLoginService', function($scope, userLoginService){

        $scope.stuff = 'login';

        $scope.stuff2 = userLoginService.service;
    }])


    .service('userLoginService', function(){

        this.service = 'userLoginService';
    });


