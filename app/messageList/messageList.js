(function() {
  'use strict';
  angular
    .module('app')
    .component('messagelist', {
      controller: 'messageListController',
      templateUrl: 'app/messageList/messageList.html',
      bindings: {
        datamsg: '<'
      }
    })

}());
