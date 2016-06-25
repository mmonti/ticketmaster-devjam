(function() {
  'use strict';

  angular
    .module('ticketmaster')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
