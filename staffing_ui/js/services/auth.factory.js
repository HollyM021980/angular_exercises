angular.module('StaffingUI').factory('AuthFactory', function($http, $window, ServerUrl) {


    var login = function(credentials) {
        return $http
            .post(ServerUrl + 'login', credentials)
            .success(function(response) {
                $window.sessionStorage.setItem('staffingUI.user', response.token);

                $http.defaults.headers.common['Authorization'] = 'Token token=' + $window.sessionStorage.getItem('staffingUI.user');
            });
    };

    var signup = function(credentials) {
        var params = {
            user: credentials
        };
debugger;
        return $http
        .post(ServerUrl + 'users', params)
        .success(function(response) {
            $window.sessionStorage.setItem('staffingUI.user', response.token);

            $http.defaults.headers.common['Authorization'] = 'Token token=' + $window.sessionStorage.getItem('staffingUI.user');
        });
    };


    var logout = function(credentials) {
        return $http
            .get(ServerUrl + '/logout')
            .success(function(response) {
                $window.sessionStorage.removeItem('staffingUI.user');
            });
    };

    var isAuthenticated = function() {
        return !!$window.sessionStorage.getItem('staffingUI.user');
    };

    return {
        login: login,
        signup: signup,
        logout: logout,
        isAuthenticated: isAuthenticated
    };
});
