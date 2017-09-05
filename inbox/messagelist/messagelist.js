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
    
    },
    templateUrl: './inbox/messagelist/messagelist.html'
  })
}());
