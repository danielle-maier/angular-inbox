(function() {
  'use strict';
  angular
    .module('app')
    .component('messagelist', {
      controller: 'messageListController',
      templateUrl: 'app/messageList/messageList_template.html',
      bindings: {
        datamsg: '<'
      }
    })

}());
