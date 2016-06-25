(function() {
  'use strict';

  angular
    .module('ticketmaster')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, authService, $http) {
    var vm = this;

    vm.token = authService.getToken();
    vm.auth = function() {
        authService.authenticate();
    }

    if (vm.token) {
      var _url = "https://api.foursquare.com/v2/users/self/checkins?oauth_token={TOKEN}&v=20160625".supplant({
        TOKEN: vm.token
      });

      $http({
        method: 'GET',
        url: _url
      }).then(function successCallback(response) {
        console.log(response);

      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(response);
      });
    }
  }
})();
