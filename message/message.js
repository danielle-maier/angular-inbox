(function() {
  'use strict';

  angular
    .module('angular-inbox')
    .component('messages', {
      controller: function() {
        const vm = this;
        vm.$onInit = function() {
          const data = angular.fromJson(json);
          vm.message = data;
        }
      },
      templateUrl: './message/message.html'
    });
})();
