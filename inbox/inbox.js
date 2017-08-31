(function() {
  'use strict';

  angular
    .module('app')
    .component('inbox', {

      controller: function() {
        const vm = this
        console.log(vm)

        vm.$onInit = function() {
          var data = angular.fromJson(json)
          vm.messages = data
          console.log(data);
        }
      },
      templateUrl: './inbox/inbox.html'
    });
})();
