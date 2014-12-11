/**
 * Created by MacBookEr on 12/10/14.
 */
angular.module('app')
    .controller('userCheckController', ['$scope', function($scope){

        $scope.stuff = 'check';

    }])
    .service('userLoginService', function(){

        this.service = 'userLoginService';
    });