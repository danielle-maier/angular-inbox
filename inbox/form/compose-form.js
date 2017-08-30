(function() {
  'use strict';

  angular
    .module('app')
    .component('composeform', {
      controller: function() {
        console.log("hi");
      },
      templateUrl: './inbox/form/compose-form.html'
    });
})();
