(function() {
  'use strict';

  angular
    .module('ticketmaster')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
