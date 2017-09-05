(function() {
  'use strict';

  angular
    .module('app')
    .component('inbox', {

      controller: function() {
        const vm = this;
        vm.$onInit = function() {
          var data = angular.fromJson(json);
          vm.messages = data;

        }
      },
      templateUrl: './inbox/inbox.html'
    });
})();
