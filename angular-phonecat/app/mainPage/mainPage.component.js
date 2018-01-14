'use strict';

angular.
module('mainPage').
component('mainPage', {
    templateUrl: 'mainPage/mainPage.template.html',
    controller: function UserListController($http, $scope , $timeout, $mdSidenav) {
        var self = this;
        self.orderProp = 'date';

        $http.get('accounts/herbert.json').then(function(response) {
            self.users= response.data;
        });

        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');

        function buildToggler(componentId) {
            return function() {
                $mdSidenav(componentId).toggle();
            };
        }



    }
});
