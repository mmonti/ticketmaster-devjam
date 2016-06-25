(function() {
  'use strict';

  angular
    .module('ticketmaster')
    .config(config);

  /** @ngInject */
  function config($logProvider, localStorageServiceProvider) {
    // = Enable log
    $logProvider.debugEnabled(true);

    // = localStorageServiceProvider
    localStorageServiceProvider.setPrefix('ticketmaster');
  }

})();
