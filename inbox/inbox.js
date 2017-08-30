(function() {
  'use strict';

  angular
    .module('app')
    .component('inbox', {
      controller: function() {
        console.log("hi");
      },
      templateUrl: './inbox/inbox.html'
    });
})();
