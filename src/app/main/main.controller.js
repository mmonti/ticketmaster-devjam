(function() {
  'use strict';

  angular
    .module('ticketmaster')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, authService, checkinService, eventsService) {
    var vm = this;

    vm.token = authService.getToken();
    vm.auth = function() {
        authService.authenticate();
    }

    if (vm.token) {
      eventsService.getEvents().then(function(ticketmaster) {
        console.log(ticketmaster);
      });
      checkinService.getCheckins(vm.token).then(function(foursquare) {
        vm.checkins = foursquare.data.response.checkins;
      })
    }
  }
})();
