(function() {
  'use strict';

  angular
    .module('app')

    .component('message', {
      bindings: {
        data: '<',
      },
      controller: function() {
        const vm = this;
        vm.starMessage = function(message) {
          var status = message.starred;
          message.starred = !message.starred;
        }
        vm.checkedMessage = function(selected, message) {
          message.selected = selected;
        }

      },
      templateUrl: './inbox/message/message.html'
    });
})();
