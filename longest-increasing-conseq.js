/*
298. Binary Tree Longest Consecutive Sequence - Medium

Given the root of a binary tree, return the length of the longest consecutive sequence path.

The path refers to any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The longest consecutive path needs to be from parent to child (cannot be the reverse).

Example 1:


Input: root = [1,null,3,2,4,null,null,null,5]
Output: 3
Explanation: Longest consecutive sequence path is 3-4-5, so return 3.
Example 2:


Input: root = [2,null,3,2,null,1]
Output: 2
Explanation: Longest consecutive sequence path is 2-3, not 3-2-1, so return 2.
 

Constraints:

The number of nodes in the tree is in the range [1, 3 * 104].
-3 * 104 <= Node.val <= 3 * 104
*/

var longestConsecutive = function (root) {
  const max = [0];
  dfs(root, 0, 0, max);
  return max[0];
};

var dfs = function (root, count, target, max) {
  if (!root) return;
  if (root.val === target) {
    count++;
  } else {
    count = 1;
  };
  max[0] = Math.max(max[0], count);
  dfs(root.left, count, root.val + 1, max);
  dfs(root.right, count, root.val + 1, max);
}