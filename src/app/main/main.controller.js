(function() {
  'use strict';

  angular
    .module('ticketmaster')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.auth = function() {
      var authenticate_uri = "https://foursquare.com/oauth2/authenticate?client_id={CLIENT_ID}&response_type=token&redirect_uri={REDIRECT_URI}".supplant({
        CLIENT_ID: "BNHHOTSNIO0QMO4H2IKHDOIL3WYCF2GH1NDBQMV2WCNJQMCA",
        REDIRECT_URI: "http://localhost:3000/#/"
      });

      window.location.href = authenticate_uri;
    }
  }
})();
