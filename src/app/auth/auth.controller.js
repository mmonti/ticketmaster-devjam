(function() {
  'use strict';

  angular
    .module('ticketmaster')
    .controller('AuthController', AuthController);

  /** @ngInject */
  function AuthController($rootScope, $state, $location, authService) {
    var vm = this;
    var token = $location.hash().split("=")[1];
    if (token) {
      authService.setToken(token);
    }
    $state.go('home');
  }
})();
