/*
how high

Write a function, howHigh, that takes in the root of a binary tree. The function should return a number representing the height of the tree.

The height of a binary tree is defined as the maximal number of edges from the root node to any leaf node.

If the tree is empty, return -1.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const howHigh = (node) => {
  if (!node) return -1;
  const left = howHigh(node.left);
  const right = howHigh(node.right);
  return 1 + Math.max(left, right);
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
console.log(howHigh(a)); 
// -> 2

const g = new Node('g');
e.left = g
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /
//   g
console.log(howHigh(a)); 
// -> 3

const p = new Node('p');
const q = new Node('q');

p.right = q;

//      p
//       \
//        q

console.log(howHigh(p)); 
// -> 1

const z = new Node('z');
// z
console.log(howHigh(z)); 
// -> 0

console.log(howHigh(null)); 
// -> -1