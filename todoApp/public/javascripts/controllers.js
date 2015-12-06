var todoControllers = angular.module('todoControllers', []);

todoControllers.controller('IndexCtrl', ['$scope', function($scope){

  var self = this;

  self.clearTodoList = function() {
    self.todoList = {
      items: [
      ]
    };
  };

  self.clearTodoList();

  self.editTodo = function (itemText) {
    console.log('Edit!');
  };

  self.deleteTodo = function(itemText) {
    var index = -1;
    for (var i = 0; i < self.todoList.items.length; i++) {
      if (self.todoList.items[i].text === itemText) {
        index = i;
        break;
      }
    }
    if (index === -1) {
      console.log('Something went wrong deleting ' + itemText);
    }
    self.todoList.items.splice( index, 1);
  };

  self.addTodo = function() {
    var newItem = { text: self.todoText, complete: false };
    self.todoText = '';
    self.todoList.items.push(newItem);
  };

}]);

