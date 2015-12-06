var todoApp = angular.module('todoApp', ['ngRoute', 'todoControllers', 'xeditable']);

todoApp.run(function(editableOptions) {
    editableOptions.theme = 'bs3';
});

var routing = function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/index.jade',
      controller: 'IndexCtrl'
    }).
      otherwise({
        redirectTo: '/'
    });
}

todoApp.config(['$routeProvider', routing ]);
