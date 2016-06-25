(function() {
  'use strict';

  angular
    .module('ticketmaster')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, authService, checkinService, ticketmasterService) {
    var vm = this;

    vm.token = authService.getToken();
    vm.auth = function() {
        authService.authenticate();
    }

    if (vm.token) {
      checkinService.getCheckins(vm.token).then(function(foursquare) {
        vm.checkins = foursquare.data.response.checkins;
      });

      vm.findEvents = function(checkin) {
        vm.eventsNearBy = {};
        var params = {
          latlong: checkin.venue.location.lat + "," + checkin.venue.location.lng,
          radius: 5,
          unit: "miles",
          startDateTime: new Date().toISOString()
        }
        ticketmasterService.findEvents(params).then(function(ticketmaster) {
           vm.eventsNearBy[checkin.id] = ticketmaster.data._embedded.events
        });
      }
    }
  }
})();
