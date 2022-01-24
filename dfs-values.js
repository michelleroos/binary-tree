/**
 depth first values

 Write a function, depthFirstValues, that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// T: O(n) S: O(n)
const depthFirstValues = (root) => {
  if (!root) return [];
  const left = depthFirstValues(root.left);
  const right = depthFirstValues(root.right);
  return [root.val, ...left, ...right];
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

console.log(depthFirstValues(a));
//    -> ['a', 'b', 'd', 'e', 'c', 'f']

const g = new Node('g');
e.left = g;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /
//   g

console.log(depthFirstValues(a));
//    -> ['a', 'b', 'd', 'e', 'g', 'c', 'f']


const z = new Node('z');
//      z

console.log(depthFirstValues(z));
//    -> ['z']

a.right = b;
a.left = null;
b.left = c;
b.right = null;
c.right = d;
c.left = null;
d.right = e;
d.left = null;
e.left = null;
e.right = null;
//      a
//       \
//        b
//       /
//      c
//       \
//        d
//         \
//          e

console.log(depthFirstValues(a));
//    -> ['a', 'b', 'c', 'd', 'e']

console.log(depthFirstValues(null));
//    -> []