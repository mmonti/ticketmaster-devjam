(function() {
  'use strict';

  angular
    .module('ticketmaster')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('auth', {
        url: '/auth',
        templateUrl: 'app/auth/auth.html',
        controller: 'AuthController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
