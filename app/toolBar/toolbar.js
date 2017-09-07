(function() {
  'use strict';
  angular
    .module('app', )
    .component('toolbar', {
      controller: 'toolbarController',
      templateUrl: 'app/toolBar/toolbar.html',
      bindings: {
        datamsgs: '<',
        formshow: '<'

      }
    })
}());
