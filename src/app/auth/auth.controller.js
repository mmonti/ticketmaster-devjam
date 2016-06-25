(function() {
  'use strict';

  angular
    .module('ticketmaster')
    .controller('AuthController', AuthController);

  /** @ngInject */
  function AuthController($timeout, webDevTec, toastr, $location, $routeParams) {
    var vm = this;

    vm.routeParams = $routeParams;


  }
})();
