(function() {
  'use strict';

  angular
    .module('ticketmaster')
    .factory('ticketmasterService', TicketMasterService);

  function TicketMasterService($log, $http) {
    var config = {
      url: "https://app.ticketmaster.com/discovery/v2/{SOURCE}.json?{PARAMS}&apikey={APIKEY}"
    }

    var service = {
      findEvents : function(params) {

        var urlParams = Object.keys(params).map(function(key) {
            return key + '=' + params[key];
        }).join('&');

        var request_uri = config.url.supplant({
          SOURCE: 'events',
          PARAMS: urlParams,
          APIKEY: 'sTGEPPZ2DUEeLU7PmL8kJfBNtyfhApiG'
        });

        return $http({
          method: 'GET',
          url: request_uri
        });

      }
    };
    return service;
  }
})();
