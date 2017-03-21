function linkedListGenerator(){

  var head = null;

  var tail = null;

  function getHead () {
      return head;
  }

  function getTail () {
      return tail;
  }

  function add (newNodeA) {
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
  }

  function remove (x) {
    if (get(x) === false) {
      return false;

    }

    if (x === 0) {
      if (head === tail) {
        head = null;

      } else {
        head = head.next;

      }
    }

    var current = get(x - 1);

      if (current.next === tail) {
        if (current === head) {
          return;
        } else {
          current.next = current.next.next;
          tail = current;
        }
      } else {
        current.next = current.next.next;
      }
  }

  function get (x) {
    var current = head;

    for (var i = 0; i < x; i++) {
      if (current.next === null) {
        return false;

      }
        current = current.next;

    }

      return current;
  }

  function insert (value, x) {
    var newNode = {
      value: value,
      next: null
    };

    if (x === 0) {
      newNode.next = head;
      head = newNode;

    } else {

      var current = get(x - 1);

      if (current === head) {
        if (head === tail) {
          head.next = newNode;

        }
          newNode.next = head.next;
          head.next = newNode;

      } else {
        newNode.next = current.next;
        current.next = newNode;

      }
    }
  }

  return {

    getHead: getHead,

    getTail: getTail,

    add: add,

    remove: remove,

    get: get,

    insert: insert
  };
}