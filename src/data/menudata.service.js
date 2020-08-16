(function () {
    'use strict';
    
    angular.module('data')
    .service('MenuDataService', MenuDataService);
    
    
    MenuDataService.$inject = ['$http']
    function MenuDataService($http) {
      var service = this;
      service.categories =[];
      
      service.getAllCategories= function(){
          var response = $http({
              method: "GET",
              url: ("https://davids-restaurant.herokuapp.com/categories.json")
          });
          return  response;
      }


    



      service.getItemsForCategory = function(categoryShortName){
            //https://davids-restaurant.herokuapp.com/menu_items.json?category=
     
            var response = $http({
              method: "GET",
              url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName)
          });
          return  response;
     
     
     
          }

    //   // List of shopping items
    //   var items = [];
    
    //   // Pre-populate a no cookie list
    //   items.push({
    //     name: "Sugar",
    //     quantity: "2 bags",
    //     description: "Sugar used for baking delicious umm... baked goods."
    //   });
    //   items.push({
    //     name: "flour",
    //     quantity: "1 bags",
    //     description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
    //   });
    //   items.push({
    //     name: "Chocolate Chips",
    //     quantity: "3 bags",
    //     description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
    //   });
    
    //   // Simulates call to server
    //   // Returns a promise, NOT items array directly
    //   service.getItems = function () {
    //     var deferred = $q.defer();
    
    //     // Wait 2 seconds before returning
    //     $timeout(function () {
    //       // deferred.reject(items);
    //       deferred.resolve(items);
    //     }, 800);
    
    //     return deferred.promise;
    //   };

    }
    
    })();
    