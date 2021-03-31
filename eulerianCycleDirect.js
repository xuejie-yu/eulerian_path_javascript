
const eulerianCycleDirect = (edges) => {
  //create graph based on the input edges
  const graph = createGraph(edges);

  //check whether it is a candidate for eulerian path
  const start = isCandidate(graph);
  if (!start) {
    return false;
  }
  let result = [];
  dfs(graph, start, result);
  return result.join(" -> ");
};

const dfs = (graph, vertex, result) => {
  const outNode = graph.vertices[vertex.label].out;
  for (let i = 0; i < outNode.length; i++) {
    const toVisit = outNode[i];
    //make sure to visit node is still valid after dfs
    if (toVisit) {
      //remove the edge connect current vertex and toVisit node
      graph.vertices[vertex.label].out.shift();
      dfs(graph, graph.vertices[toVisit], result);
    }
  }
  //if no out going node to visit, push the current node to result
  result.unshift(vertex.label);
}

const createGraph = (edges) => {
  const graph = {
    vertices: {}
  };

  edges.forEach(edge => {
    if (!graph.vertices[edge[0]]) {
      graph.vertices[edge[0]] = new Vertex(edge[0]);
    }
    if (!graph.vertices[edge[1]]) {
      graph.vertices[edge[1]] = new Vertex(edge[1]);
    }
    graph.vertices[edge[0]].addEdge(edge);
    graph.vertices[edge[1]].addEdge(edge);
  });

  return graph;
};

/**
All vertices should have same number of in and out edges
 */
const isCandidate = (graph) => {
  const vertices = Object.values(graph.vertices);
  let start = [];
  let end = []
  for (let i = 0; i < vertices.length; i++) {
    const vertex = vertices[i];
    if (vertex.in.length !== vertex.out.length) {
      return null;
    }
  }
  return vertices[0];
};

class Vertex {
  constructor(label) {
    this.label = label;
    this.in = [];
    this.out = [];
  }

  addEdge(edge) {
    if (edge[0] === this.label) {
      this.out.push(edge[1]);
    } else {
      this.in.push(edge[0]);
    }
  }
}

module.exports = eulerianCycleDirect;