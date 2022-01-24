/*
tree sum
Write a function, treeSum, that takes in the root of a binary tree that contains number values. The function should return the total sum of all values in the tree.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  };
};

const treeSum = (root) => {
  if (!root) return 0;
  const left = treeSum(root.left);
  const right = treeSum(root.right);
  return root.val + left + right;
};

let a = new Node(3);
let b = new Node(11);
let c = new Node(4);
let d = new Node(4);
let e = new Node(-2);
let f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

treeSum(a); 
// -> 21

a = new Node(1);
b = new Node(6);
c = new Node(0);
d = new Node(3);
e = new Node(-6);
f = new Node(2);

let g = new Node(2);
let h = new Node(2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      1
//    /   \
//   6     0
//  / \     \
// 3   -6    2
//    /       \
//   2         2

treeSum(a); 
// -> 10

treeSum(null); 
// -> 0