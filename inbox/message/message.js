(function() {
  'use strict';

  angular
    .module('app')
    .component('message', {
      controller: function() {
        const vm = this;
        vm.$onInit = function() {
          const data = angular.fromJson(json);
          vm.message = data;
        }
      },
      templateUrl: './inbox/message/message.html'
    });
})();
