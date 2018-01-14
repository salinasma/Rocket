'use strict';

angular.
module('navBar').
component("navBar", {
    templateUrl: 'navBar/navBar.template.html',
    controller: [ '$scope', function NavBarController($scope) {
        $scope.currentNavItem = 'page1';

        $scope.goto = function(page) {
            console.log("Goto " + page);
        }
    }
    ]
} );

