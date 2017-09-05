(function() {
  'use strict';

  angular
    .module('app')
    .component('composeform', {
      controller: function() {
        console.log("form says hi");
      },
      templateUrl: './inbox/form/compose-form.html'
    });
})();
