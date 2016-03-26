(function(angular) {
    'use strict';

    function NavbarController($http) {
        
    }
    
    NavbarController.prototype.showCreateForm = function() {
        console.log($('#dashboard_container')); 
        $('#dashboard_container').hide();
        $('#createform_container').show();
    }
    
    NavbarController.prototype.showDashboard = function() {
        $('#createform_container').hide();
        $('#dashboard_container').show();
    }
    angular.module('ampApp').component('ampnav', {
        templateUrl: 'components/navbar/navbar.html',
        controller: NavbarController,
        controllerAs: "vm",
        bindings: {
            userdata: '='
        }
    });
})(window.angular);