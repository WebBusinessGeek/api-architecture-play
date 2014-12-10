/**
 * Created by MacBookEr on 12/10/14.
 */
angular.module('app')

.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/login/',
        {
            templateUrl:'user/userLogin.html',
            controller: 'userLoginController'
        }
    )
        .when('/logincheck/',
        {
            templateUrl: 'user/userCheck.html',
            controller: 'userCheckController'
        }
    )

    }]);