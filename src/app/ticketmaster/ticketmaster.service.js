(function() {
  'use strict';

  angular
    .module('ticketmaster')
    .factory('ticketmasterService', TicketMasterService);

  function TicketMasterService($log, $http) {
    var tmUrl = "https://app.ticketmaster.com/discovery/v2/{SOURCE}.json?{PARAMS}&apikey={APIKEY}";

    var service = {

      findEvents : function() {
        var _url = tmUrl.supplant({
          SOURCE: 'events',
          PARAMS: 'lanlong=34.10139730587865,-118.34369219985513',
          APIKEY: 'sTGEPPZ2DUEeLU7PmL8kJfBNtyfhApiG'
        });

        return $http({
          method: 'GET',
          url: _url
        });

      }
    };
    return service;
  }
})();
