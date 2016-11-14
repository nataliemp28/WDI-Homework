angular
    .module('dogApp', ['ngResource', 'ui.router', 'satellizer'])
    .config(Router)
    .config(Auth);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];

Auth.$inject = ['$authProvider'];
function Auth($authProvider) {
    $authProvider.loginUrl = '/login';
    $authProvider.signupUrl = '/register';
}

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
        .state('register', {
          url: '/register',
          templateUrl: '/templates/register.html',
          controller: 'RegisterController as register'
        })
        .state('login', {
          url: '/login',
          templateUrl: '/templates/login.html',
          controller: 'LoginController as login'
        });

    $urlRouterProvider.otherwise('/dogs');
}

Auth.$inject = ['$authProvider'];
function Auth($authProvider) {
  $authProvider.loginUrl = '/login';
  $authProvider.signupUrl = '/register';

  $authProvider.tokenPrefix = '';

  $authProvider.facebook({
    clientId: '1854080408158696'
  });
}
