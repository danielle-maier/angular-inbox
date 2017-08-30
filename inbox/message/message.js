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

          vm.toggleStar= function(messages){
            messages.starred = !messages.starred;
          }
        }
      },
      templateUrl: './inbox/message/message.html'
    });
})();
