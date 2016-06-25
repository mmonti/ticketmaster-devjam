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
      },
      authenticate : function() {
        var redirect = window.location.href.replace(window.location.hash, '');
        var authenticate_uri = "https://foursquare.com/oauth2/authenticate?client_id={CLIENT_ID}&response_type=token&redirect_uri={REDIRECT_URI}".supplant({
          CLIENT_ID: "BNHHOTSNIO0QMO4H2IKHDOIL3WYCF2GH1NDBQMV2WCNJQMCA",
          REDIRECT_URI: encodeURIComponent(redirect + "#/auth")
        });
        window.location.href = authenticate_uri;
      }
    };
    return service;
  }
})();
