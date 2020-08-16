(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/home.template.html'
  })

  // Categories List
  .state('categoriesList', {
    url: '/categories',
    templateUrl: 'src/data/categories.template.html',
    controller: 'CategoriesListController as cat',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories()
        .then(function(response) {
          //console.log(response.data)
          return response.data;
        });
      }]
    }
  })

  //Item detail

  .state('itemsDet', {
    url: '/items/{catSN}/{name}',
    templateUrl: 'src/data/items.template.html',
    controller: 'ItemsController as itms',
    resolve: {

      items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.catSN)
       .then(function(response) {

          console.log(response.data.menu_items);
          return response.data;
        });
      }],

      title:  ['$stateParams', function ($stateParams) { 
        return $stateParams.name}]

      
    }
  });

}

})();
