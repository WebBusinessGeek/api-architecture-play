/**
 * Created by MacBookEr on 12/10/14.
 */
angular.module('app')
    .controller('userLoginController', ['$scope','userLoginService', function($scope, userLoginService){

        $scope.stuff = 'login';

        $scope.stuff2 = userLoginService.service;

        $scope.clickAction = function(email, password)
        {
            console.log(email + ' ' + password);
        }

        $scope.auth_token_child = $scope.$parent.auth_token;

        $scope.addOne = function()
        {
            $scope.$parent.request_counter++;
        }
    }]);





