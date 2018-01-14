'use strict';

angular.
module('mainPage').
component('mainPage', {
    templateUrl: 'mainPage/mainPage.template.html',
    controller: function UserListController($http, $scope , $timeout, $mdSidenav,NgTableParams ) {
        var self = this;
        self.orderProp = 'date';
        var tableParams; 

        $http.get('accounts/patterson.json').then(function(response) {
            self.users= response.data.transactions;
            console.log(self.users);
        }).then(function()
            {
        self.tableParams = new NgTableParams({}, { dataset: self.users});
            }) 
        
        
        $scope.creditOrDebit = function(statement){
            if(self.debit){
                if(statement.type === "debit")
                    return true;

            } 
            if(self.credit){
                if(statement.type === "credit")
                    return true;

            }
            return false
        }


        $scope.toggleLeft = buildToggler('left');
        $scope.toggleRight = buildToggler('right');

        function buildToggler(componentId) {
            return function() {
                $mdSidenav(componentId).toggle();
            };
        }

        

    }
});
