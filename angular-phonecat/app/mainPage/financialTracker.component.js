'use strict';

angular.
module('financialTracker').
component('financialTracker', {
    templateUrl: 'mainPage/financialTracker.template.html',
    controller: function UserListController($http, $scope , $timeout, $mdSidenav,NgTableParams) {
        var self = this;
        self.orderProp = 'date';
        var tableParams; 

        $scope.chartlabels= ["a","b","c", "d"];
        $scope.chartdata = [100,200,300, 400];

       $scope.options = [];
        $http.get('accounts/patterson.json').then(function(response) {
            $scope.users= response.data.transactions;
        }).then(function()
            {
        self.tableParams = new NgTableParams({}, { dataset: $scope.users});
        
        for (var key in $scope.users[0]) {
            $scope.options.push(key);
            
          // do some more stuff with obj[key]
          }

            }) 


    $scope.$watch("row",function(newValue,oldValue){
            console.log(newValue);
          });
       /* 
    var debito;
    var credito;
    for(activity in $scope.row){
        if(row.isActive === 'debit'){
            debito += 1;
        }
         else
            credito += 1;
        
    }
       */ 
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

