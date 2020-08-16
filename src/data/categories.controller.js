(function () {
    'use strict';
    
    angular.module('data')
    .controller('CategoriesListController', CategoriesListController);
    
    
    CategoriesListController.$inject = ['categories'];
    function CategoriesListController(categories) {
      var cat = this;
      cat.categories = categories;
      console.log(cat.categories);
    }
    
    })();