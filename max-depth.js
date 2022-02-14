/*
104. Maximum Depth of Binary Tree Easy
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/

var maxDepth = function (root) {
  if (!root) return 0;
  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  return 1 + Math.max(left, right)
};

const root1 = [3,9,20,null,null,15,7];
console.log(maxDepth(root1));
// Output: 3

const root2 = [1,null,2];
console.log(maxDepth(root2));
// Output: 2
 