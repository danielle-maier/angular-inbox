(function() {
  'use strict';
  angular
  .module('app')
  .component('messagelist', {
     bindings: {
      messagelistselected : '<',
    },
    controller: function() {
      const vm=this
    console.log(vm);
    },
    templateUrl: './inbox/messagelist/messagelist.html'
  })
}());
