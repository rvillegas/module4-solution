(function () {
    'use strict';
    
    angular.module('data')
    .controller('ItemsController', ItemsController);
    
    
    ItemsController.$inject = ['items'];
    function ItemsController(items) {
      var itms = this;
      itms.items = items.menu_items;
      itms.title = items.category.name;
      console.log('items='+itms.items);
    }
    
    })()