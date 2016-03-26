
var ampApp = angular.module('ampApp', ['ngAnimate', 'firebase','toaster']);

 function MainController($scope, $firebaseArray, toaster) {
     //console.log($firebaseArray);
     //this.materialsList = {};
    // var materialsRootRef = ;
    var self = this;
    this.toaster = toaster;
    
    var materialsList = $firebaseArray(new Firebase('https://scorching-inferno-2987.firebaseio.com/materials/'));

     // to take an action after the data loads, use the $loaded() promise
     materialsList.$loaded().then(() => {
        console.log("loaded record:", materialsList.$id, materialsList);
       $scope.materialsList = materialsList;
       // To iterate the key/value pairs of the object, use angular.forEach()
       angular.forEach(materialsList, function(value, key) {
         // console.log(key, value);
       });
     });

     // To make the data available in the DOM, assign it to $scope
     $scope.materialsList = materialsList;
     
    materialsList.$watch(function(event) {
     
       console.log(event);
     });
    
    
   
     // For three-way data bindings, bind it to the scope instead
     //obj.$bindTo($scope, "data");
  }

  
ampApp.controller("mainCtrl", ["$scope", "$firebaseArray", "toaster", MainController]);


angular.module('filters-module', [])
.filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}])

/*
 (function(angular) {
     'use strict';
     
     function MainController($scope) {
         this.materialsList = {};
         this.materialsRootRef = new Firebase('https://scorching-inferno-2987.firebaseio.com/materials/');
         this.junkVar = "INITIAL Junk";
         //this.ampdata = {
         //    amp_url: './amp-test.json'
         //};
         var self = this;
         this.materialsRootRef.on("value", (snapshot) => {
          console.info('Values being added');
          self.materialsList = snapshot.val();
          this.newThingVar = snapshot.val();
          this.junkVar = "UPDATED NOW";
           console.log('SNAPSHOT VAL', snapshot.val());
         }, function (errorObject) {
           console.error("The read failed: " + errorObject.code);
         });
         
         self.materialsRootRef.on('child_added', function(snapshot) {
          var newData = snapshot.val();
          self.materialsList = snapshot.val();
         }, function (errorObject) {
           console.error("The read failed: " + errorObject.code);
        });
    }
    
   
    angular.module('ampApp', ['ngRoute']).controller('mainCtrl',['$scope', MainController]);
 })(window.angular);
 
*/