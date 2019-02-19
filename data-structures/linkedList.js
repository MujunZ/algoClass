/*

LINKED LIST

Comprised of nodes that represent a sequence.
Each node is composed of data and a reference/link to the next node.


*** Operations:

** Part 1

myList.forEach(callbackFn)
invoke callback function with the value of each node

myList.print()
=> string with all values in list (ex: '0, 1, 2, 3')

myList.insertAfter(refNode, value)
=> new node
insert new node associated with value passed in after refNode

myList.removeAfter(refNode)
=> removed node
remove node after the refNode

myList.insertHead(value)
=> new head
insert new head node at the beginning of the list with the value passed in

myList.removeHead()
=> removed head node
remove the head node of the linked list

myList.findNode(value)
=> first node that has a value matching what was passed in


* Optimization:
Say we have a linked list that has 100 items and we want to add an item to the very end. How would you do that with your current implementation? How can you modify the data structure to add an item to the end in constant time?

myList.appendToTail(value)
=> new tail node
add a new tail node at the end of the list with the associated value passed in

myList.removeTail()
=> removed tail node
remove the tail node from the list


** Part 2

Now let's think about creating insertBefore and removeBefore methods for the nodes in our list. Can you think of an efficient way to do so?

Think about time complexity. What would it be for your current implementation of a linked list?

How can we modify our data structures (Node and Linked List classes) so that we can make these O(1) operations?

Once you've come up with a plan, implement the following methods.

myList.insertBefore(refNode, value)
=> new node inserted
insert new node with associated value before refNode

myList.removeBefore(refNode)
=> removed node
remove node before the refNode passed in


*** Additional Exercises:

Implement a circularly linked list:
https://en.wikipedia.org/wiki/Linked_list#Circularly_linked_list

Reimplement stack and queue data structures using linked lists.


 */


// PART 1

function Node(value) {
  this.next = null;
  this.value = value;
}

function LinkedList(headValue) {
  if (headValue === undefined) console.log('Must provide value for first node');
  this.head = this.tail = new Node(headValue);
}

LinkedList.prototype.forEach = function(callback) {
  // implement me...
  let curr = this.head;
  while (curr) {
    callback(curr.value);
    curr = curr.next;
  }
};
// Time complexity: O(n)

LinkedList.prototype.print = function() {
  // implement me...
  let res = [];
  this.forEach(el => {res.push(el)});
  return res.join(", ");
};
// Time complexity: O(n)

LinkedList.prototype.insertAfter = function(node, value) {
  // implement me...
  let nd = new Node(value);
  nd.next = node.next.next ? node.next.next : null;
  node.next = nd;
};
// Time complexity: O(1)

LinkedList.prototype.removeAfter = function(node) {
  // implement me...
  if (node.next) {
    node.next = node.next.next ? node.next.next : null;
  }
};
// Time complexity:

LinkedList.prototype.insertHead = function(value) {
  // implement me...
  let nd = new Node(value);
  nd.next = this.head;
  this.head = nd;
};
// Time complexity:

LinkedList.prototype.removeHead = function() {
  // implement me...
  this.head = this.head.next;
}

LinkedList.prototype.findNode = function(value) {
  // implement me...
  let curr = this.head;
  while (curr) {
    if(curr.value === value) return curr;
    curr = curr.next;
  }
};
// Time complexity:

LinkedList.prototype.appendToTail = function(value) {
  // implement me...
  let nd = new Node(value);
  let curr = this.head;
  while (curr.next) {
    curr = curr.next;
  }
  curr.next = nd;
  return nd;
};
// Time complexity:


// PART 2:

LinkedList.prototype.insertBefore = function(node, value) {
  // implement me...
};
// Time complexity:

LinkedList.prototype.removeBefore = function(node) {
  // implement me...
};
// Time complexity:

LinkedList.prototype.reverse = function() {
  let nh = this.head;
  helper(nh);
  this.head = nh;
  return this.head;

  function helper(head) {
    if (!head || !head.next) {
      nh = head;
      return head;
    }
    let tmp = helper(head.next);
    head.next.next = head;
    head.next = undefined;
    return tmp;
  }
}



/*
*** Exercises:

1. Implement a stack using a linked list.

2. Implement a queue using a linked list.

3. Write a method that remove duplicates from an unsorted linked list. What is the time complexity? Re-implement the method without using any additional storage structure (constant space complexity). What is the time complexity?

4. Reverse a linked list. Do not use any additional storage structures.

5. Find the kth to last element of a singly linked list.

6. Detect if a linked list has a loop.

7. Check if a linked list is a palindrome.

8. Given two linked lists that represent numbers, return a linked list that represents the sum of those numbers:
  4 2 5        (4 -> 2 -> 5)
+ 7 3 1        (7 -> 3 -> 1)
--------
1 1 5 6   (1 -> 1 -> 5 -> 6)

 */

let linkedList1 = new LinkedList(1);
linkedList1.appendToTail(2)
linkedList1.appendToTail(3)
linkedList1.appendToTail(4)
linkedList1.reverse();
console.log(linkedList1.print());