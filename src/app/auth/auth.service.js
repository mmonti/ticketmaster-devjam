(function() {
  'use strict';

  angular
    .module('ticketmaster')
    .factory('authService', AuthService);

  /** @ngInject */
  function AuthService($log, $http) {
    var token = null;
    var service = {
      setToken: function(_token) {
        token = _token
      },
      getToken : function() {
        return token;
      }
    };
    return service;
  }
})();
