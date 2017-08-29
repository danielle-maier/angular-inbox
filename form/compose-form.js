(function() {
  'use strict';

  angular
    .module('angular-inbox')
    .component('composeform', {
      controller: function() {
        console.log("hi");
      },
      templateUrl: './form/compose-form.html'
    });
})();
