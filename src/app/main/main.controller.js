(function() {
  'use strict';

  angular
    .module('ticketmaster')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, authService, checkinService) {
    var vm = this;

    vm.token = authService.getToken();
    vm.auth = function() {
        authService.authenticate();
    }

    if (vm.token) {
      checkinService.getCheckins(vm.token).then(function(foursquare) {
        vm.checkins = foursquare.data.response.checkins;
      })
    }
  }
})();
