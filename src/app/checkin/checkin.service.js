(function() {
  'use strict';

  angular
    .module('ticketmaster')
    .factory('checkinService', CheckinService);

  /** @ngInject */
  function CheckinService($log, $http) {
    var config = {
      url: "https://api.foursquare.com/v2/users/self/checkins?oauth_token={TOKEN}&v=20160625"
    }

    var checkins = null;
    var service = {
      getCheckins: function(_token) {
        return $http({
          method: 'GET',
          url: config.url.supplant({
            TOKEN : _token
          })
        });
      }
    };
    return service;
  }
})();
