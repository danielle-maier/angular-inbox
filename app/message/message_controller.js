(function() {
  'use strict';
  angular
    .module('app')
    .controller('messageController', function messageController($http) {
      const vm = this
      vm.starMessage = function(message) {
        var body = {
          messageIds: [message.id],
          command: 'star',
          star: !message.starred
        };

        const url = 'https://secret-bastion-10166.herokuapp.com/api/messages';
        $http.patch(url, JSON.stringify(body))
          .then(function(response) {
            message.starred = !message.starred
          });
      }
      vm.checkedMessage = function(selected, message) {
        message.selected = selected;
      }
    })
}());
