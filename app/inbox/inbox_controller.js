(function() {
  'use strict';
  angular
    .module('app')
    .controller('inboxController', inboxController)

  function inboxController($http) {
    const vm = this;
    vm.$onInit = function() {
      // var data = angular.fromJson(json);
      // const url = 'http://localhost:8082/api/messages';
      const url = 'https://secret-bastion-10166.herokuapp.com/api/messages';
      $http.get(url).then(function(messages) {
        vm.messages = messages.data._embedded.messages
      });
      vm.formshow ={
            showvalue:true
          }
    }
  }
}());
