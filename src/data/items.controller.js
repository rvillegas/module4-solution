(function () {
    'use strict';
    
    angular.module('data')
    .controller('ItemsController', ItemsController);
    
    
    ItemsController.$inject = ['items','title'];
    function ItemsController(items, title) {
      var itms = this;
      itms.items = items;
      itms.title = title;
      console.log('items='+itms.items);
    }
    
    })()