(function() {
  'use strict';

  angular
    .module('app')
    .component('toolbar', {
      controller: function() {
        console.log("hi");
      },
      templateUrl: './inbox/toolbar/toolbar.html'
    });
})();
