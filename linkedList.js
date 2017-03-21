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
      var newNode = {
          value: newNodeA,
          next: null
        };

      if (head === null) {
        head = newNode;
        tail = head;

      } else {
        tail.next = newNode;
        tail = newNode;
      }

      return newNode;
    },

    remove: function () {},

    get: function (x) {
      if (head === null) {
        return null;
      }
      var current = head;
      for (var i = 0; i < x; i++) {
        if (current.next === null) {
          return false;
        }
          current = current.next;
      }
      return current;
    },

    insert: function () {}
  };
}
var list = linkedListGenerator();
list.add('news.ycombinator.com');
list.add('mozilla.org');
list.add('eff.org');
list.add('icann.org');
console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));