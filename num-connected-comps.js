/*
323. Number of Connected Components in an Undirected Graph - Medium

You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

Return the number of connected components in the graph.

Constraints:

1 <= n <= 2000
1 <= edges.length <= 5000
edges[i].length == 2
0 <= ai <= bi < n
ai != bi
There are no repeated edges.
*/

var createAdjList = function (n, edges) {
  const adjList = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in adjList)) adjList[a] = [];
    if (!(b in adjList)) adjList[b] = [];
    adjList[a].push(b);
    adjList[b].push(a);
  };
  for (let c = 0; c < n; c++) {
    if (!(c in adjList)) adjList[c] = [];
  }
  return adjList;
};

var countComponents = function (n, edges) {
  let count = 0;
  const visited = new Set();
  const graph = createAdjList(n, edges);
  for (let node in graph) {
    if (dfs(graph, node, visited) > 0) count++
  };
  return count;
};

var dfs = function (graph, node, visited) {
  node = String(node);
  if (!node) return 0;
  if (visited.has(node)) return 0;
  visited.add(node);
  let size = 1;
  for (let neighbor of graph[node]) {
    size += dfs(graph, neighbor, visited);
  };
  return size;
};

console.log(countComponents(5, [[0, 1], [1, 2], [3, 4]]));
// 2
console.log(countComponents(5, [[0, 1], [1, 2], [2, 3], [3, 4]]));
// 1