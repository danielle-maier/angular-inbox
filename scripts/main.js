(function (){
  'use strict';

  angular
    .module('angular-inbox', [])
    .component('inbox', {
      controller: function (){
        const data = angular.fromJson(json);
        console.log(data);
      },
      templateUrl: 'templates/compose-form.html'
    });
})();
