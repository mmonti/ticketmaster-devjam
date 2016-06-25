(function() {
  'use strict';

  angular
    .module('ticketmaster')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, authService, checkinService, ticketmasterService) {
    var vm = this;

    vm.token = authService.getToken();
    vm.auth = function() {
        authService.authenticate();
    }

    if (vm.token) {
      ticketmasterService.findEvents().then(function(ticketmaster) {
        console.log(ticketmaster);
      });

      checkinService.getCheckins(vm.token).then(function(foursquare) {
        vm.checkins = foursquare.data.response.checkins;
      })

      console.log("Calling TM");

      ticketMasterService.findEvents().then(
        function successCallback(response) {
          console.log(response);
        }, function errorCallback(response) {
          console.log("ERROR: " + response);
        }
      );

    }
  }
})();
