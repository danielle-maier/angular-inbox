(function() {
  'use strict';
  angular
    .module('app', )
    .controller('toolbarController', toolbarController)

  function toolbarController($http) {
    const vm = this;
    vm.$onInit = function() {

      vm.allSelected = function(messages) {
        if (messages !== undefined) {
          return status = messages.every(function(data) {
            return data.selected == true;
          })
        }
      }
      vm.someSelected = function(messages) {
        if (messages !== undefined) {
          const someMsgs = messages.some(function(data) {
            return data.selected == true;
          })
          const allMsgs = messages.every(function(data) {
            return data.selected == true;
          })
          return someMsgs && !allMsgs;
        }
      }
      vm.allNotSelected = function(messages) {
        if (messages !== undefined) {
          return status = messages.every(function(data) {
            return data.selected !== true;
          })
        }
      }
    }
    vm.markAsRead = function(messages) {
      if (messages !== undefined) {
        for (var i = 0; i < messages.length; i++) {
          if (messages[i].selected) {
            messages[i].read = true;
          }
        }
      }
    }
    vm.markAsUnRead = function(messages) {
      if (messages !== undefined) {
        for (var i = 0; i < messages.length; i++) {
          if (messages[i].selected) {
            messages[i].read = false;
          }
        }
      }
    }
    vm.addLabel = function(messages, label) {
      if (messages !== undefined) {
        for (var i = 0; i < messages.length; i++) {
          var labelExist = messages[i].labels.includes(label);
          if (messages[i].selected && !labelExist) {
            messages[i].labels.push(label);
          }
        }
      }
    }
    vm.removeLabel = function(messages, label) {
      if (messages !== undefined) {
        for (var i = 0; i < messages.length; i++) {
          if (messages[i].selected) {
            var index = messages[i].labels.indexOf(label);
            if (index > -1) {
              messages[i].labels.splice(index, 1);
            }
          }
        }
      }
    }
    vm.changeSelect = function(messages) {
      if (messages !== undefined) {
        if (vm.allSelected(messages)) {
          for (var i = 0; i < messages.length; i++) {
            messages[i].selected = false;
          }
        } else if (vm.someSelected(messages)) {
          for (var i = 0; i < messages.length; i++) {
            messages[i].selected = true;
          }
        } else if (vm.allNotSelected(messages)) {
          for (var i = 0; i < messages.length; i++) {
            messages[i].selected = true;
          }
        }
      }
    }
    vm.countUnreadMessages = function(messages) {
      if (messages !== undefined) {
        var count = 0;
        for (var i = 0; i < messages.length; i++) {
          if (messages[i].read == false) {
            count++;
          }
        }
        return count;
      }
    }
    vm.deleteMessage = function(messages) {
      if (messages !== undefined) {
        for (var i = 0; i < messages.length; i++) {
          if (messages[i].selected) {
            messages.splice(i, 1);
            i--;
          }
        }
      }
    }
  }

}());
