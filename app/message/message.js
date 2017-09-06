(function() {
  'use strict';
  angular
    .module('app', )
    .component('message', {
      controller: 'messageController',
      templateUrl: 'app/message/message.html',
      bindings: {
        data: '<'
      }
    })
}());
