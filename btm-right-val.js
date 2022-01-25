/*
bottom right value
Write a function, bottomRightValue, that takes in the root of a binary tree. The function should return the right-most value in the bottom-most level of the tree.

You may assume that the input tree is non-empty.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const bottomRightValue = (root) => {
  const val = [];
  const q = [root];
  while (q.length) {
    const node = q.shift();
    val.push(node.val); // to avoid linear runtime in js
    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);
  };
  return val[val.length - 1];
};

let a = new Node(3);
let b = new Node(11);
let c = new Node(10);
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
//   11     10
//  / \      \
// 4   -2     1
console.log(bottomRightValue(a)); 
// -> 1

a = new Node(-1);
b = new Node(-6);
c = new Node(-5);
d = new Node(-3);
e = new Node(-4);
f = new Node(-13);
let g = new Node(-2);
let h = new Node(6);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;
//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   -4   -13
//     / \       
//    -2  6
console.log(bottomRightValue(a)); 
// -> 6

let i = new Node(7);
f.left = i;
//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   -4   -13
//     / \    /   
//    -2  6  7 
console.log(bottomRightValue(a)); 
// -> 7

a = new Node('a');
b = new Node('b');
c = new Node('c');
d = new Node('d');
e = new Node('e');
f = new Node('f');

a.left = b;
a.right = c;
b.left = null;
b.right = d;
c.left = null;
c.right = null;
d.left = e;
e.left = null;
e.right = f;
//      a
//    /   \ 
//   b     c
//    \
//     d
//    /
//   e
//  /
// f
console.log(bottomRightValue(a)); 
// -> 'f'

k = new Node(42);
// 42
console.log(bottomRightValue(k)); 
// -> 42