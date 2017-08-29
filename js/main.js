(function (){
  'use strict';

  angular
    .module('angular-inbox', [])
    .component('inbox', {
      controller: function (){
        console.log("hi");
      },
      templateUrl: 'templates/compose-form.html'
    });
})();
