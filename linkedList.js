/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

  var head = null;

  var tail = null;

  return {

    getHead: function () {
      return head;
    },

    getTail: function () {
      return tail;
    },

    add: function (newNodeA) {
      return {
        value: newNodeA,
        next: null
      };
    },

    remove: function () {},

    get: function () {},

    insert: function () {}
  };
}