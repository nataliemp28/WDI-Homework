angular
    .module('dogApp', ['ngResource', 'ui.router'])
    .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];

function Router($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('dogsIndex', {
            url: '/dogs',
            templateUrl: '/templates/dogsIndex.html',
            controller: 'DogsIndexController as dogsIndex'
        })
        .state('dogsNew', {
           url: '/dogs/new',
           templateUrl: '/templates/dogsNew.html',
           controller: 'DogsNewController as dogsNew'
       })
       .state('dogsShow', {
          url: '/dogs/:id',
          templateUrl: '/templates/dogsShow.html',
          controller: 'DogsShowController as dogsShow'
        })
        .state('dogsEdit', {
          url: '/dogs/:id/edit/',
          templateUrl: '/templates/dogsEdit.html',
          controller: 'DogsEditController as dogsEdit'
        })
        .state('dogsUpdate', {
          url: '/dogs/:id',
          templateUrl: '/templates/dogsUpdate.html',
          controller: 'DogsUpdateController as dogsUpdate'
        });

    $urlRouterProvider.otherwise('/dogs');
}
