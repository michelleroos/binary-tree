/*
leaf list
Write a function, leafList, that takes in the root of a binary tree and returns an array containing the values of all leaf nodes in left-to-right order.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  };
};

const leafList = (root) => {
  const list = [];
  _leafList(root, list);
  return list;
};

const _leafList = (root, list) => {
  if (!root) return;
  if (!root.left && !root.right) list.push(root.val);
  _leafList(root.left, list);
  _leafList(root.right, list);
};

let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");
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
console.log(leafList(a)); 
// -> [ 'd', 'e', 'f' ] 

let g = new Node("g");
let h = new Node("h");
e.left = g;
f.right = h;
//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h
console.log(leafList(a)); 
// -> [ 'd', 'g', 'h' ]

a = new Node(5);
b = new Node(11);
c = new Node(54);
d = new Node(20);
e = new Node(15);
f = new Node(1);
g = new Node(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = null;
e.left = f;
e.right = g;
//        5
//     /    \
//    11    54
//  /   \
// 20   15
//      / \
//     1  3
console.log(leafList(a)); 
// -> [ 20, 1, 3, 54 ]

const x = new Node('x');
//      x
console.log(leafList(x)); 
// -> [ 'x' ]

console.log(leafList(null)); 
// -> [ ]