(function() {
  'use strict';

  angular
    .module('angular-inbox')
    .component('toolbar', {
      controller: function() {
        console.log("hi");
      },
      templateUrl: './toolbar/toolbar.html'
    });
})();
