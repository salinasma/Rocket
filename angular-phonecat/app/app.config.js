angular.
module('mainApp').
config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/main', {
                    template: '<main-page></main-page>'
                }).
            when('/navBar', {
                template: '<nav-bar></nav-bar>'
            }).
            when('/phones/:phoneId', {
                template: '<phone-detail></phone-detail>'
            }).
            otherwise('/main');
        }
]);
