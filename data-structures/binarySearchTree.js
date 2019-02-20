/*
BINARY SEARCH TREES

Abstract data type
A binary search tree is a tree with the additional constraints:
- each node has only two child nodes (node.left and node.right)
- all the values in the left subtree of a node are less than or equal to the value of the node
- all the values in the right subtree of a node are greater than the value of the node

*** Operations:

bsTree.insert(value)
=> bsTree (return for chaining purposes)
Insert value into correct position within tree

bsTree.contains(value)
=> true/false
Return true if value is in tree, false if not

bsTree.traverseDepthFirst_inOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first in-order (visit left branch, then current node, than right branch)
Note: In-Order traversal is most common type for binary trees. For binary search tree, this visits the nodes in ascending order (hence the name).

bsTree.traverseDepthFirst_preOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first pre-order (visits current node before its child nodes)

bsTree.traverseDepthFirst_postOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first post-order (visit the current node after its child nodes)

bsTree.isValid()
=> returns true if BST is a valid BST otherwise returns false. This method is useful for checking your other methods.

bsTree.removeNode(value)
=> node
Remove node from tree.

bsTree.checkIfFull()
=> true/false
A binary tree is full if every node has either zero or two children (no nodes have only one child)

bsTree.checkIfBalanced()
=> true/false
For this exercise, let's say that a tree is balanced if the minimum height and the maximum height differ by no more than 1. The height for a branch is the number of levels below the root.


*** Additional Exercises:
A binary search tree was created by iterating over an array and inserting each element into the tree. Given a binary search tree with no duplicates, how many different arrays would result in the creation of this tree.

*/

function BinarySearchTree (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(value) {
  // implement me...
  let nd = new BinarySearchTree(value);
  if (this.value > value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = nd;
    }
  } else if(this.value < value) {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = nd;
    }
  }
  return this;
};
// Time complexity:

BinarySearchTree.prototype.contains = function(value) {
  // implement me...
  if (this.value > value) {
    if (this.left) {
      return this.left.contains(value)
    }
  } else if(this.value < value){
    if (this.right) {
      return this.right.contains(value)
    }
  } else if(this.value === value) {
    return true;
  }

  return false;
};
// Time complexity:

BinarySearchTree.prototype.traverseDepthFirst_inOrder = function(fn) {
  // implement me...
  if (this.left) {
    this.left.traverseDepthFirst_inOrder(fn);
  }

  if (this.value) {
    fn(this.value);
  }

  if (this.right) {
    this.right.traverseDepthFirst_inOrder(fn);
  }
};
// Time complexity:

BinarySearchTree.prototype.traverseDepthFirst_preOrder = function(fn) {
  // implement me...
  if (this.value) {
    fn(this.value);
  }

  if (this.left) {
    this.left.traverseDepthFirst_preOrder(fn);
  }

  if (this.right) {
    this.right.traverseDepthFirst_preOrder(fn);
  }
};
// Time complexity:

BinarySearchTree.prototype.traverseDepthFirst_postOrder = function(fn) {
  // implement me...
  if (this.left) {
    this.left.traverseDepthFirst_postOrder(fn);
  }

  if (this.right) {
    this.right.traverseDepthFirst_postOrder(fn);
  }

  if (this.value) {
    fn(this.value);
  }
};
// Time complexity:

BinarySearchTree.prototype.checkIfFull = function() {
  // implement me...
  if (!this.left && !this.right) return true;
  if (this.left && this.right) {
    return this.left.checkIfFull(this.left) && this.right.checkIfFull(this.right);
  }
  return false;
};
// Time complexity:

BinarySearchTree.prototype.checkIfBalanced = function() {
  // implement me...
};
// Time complexity:

let fooTree = new BinarySearchTree(10);
fooTree.insert(5).insert(20).insert(15).insert(21).insert(16).insert(13);
console.log(fooTree.checkIfFull());
