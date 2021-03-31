const eulerianPathDirect = require("./eulerianPathDirect");
const eulerianPathUndirect = require("./eulerianPathUndirect");
const eulerianCycleDirect = require("./eulerianCycleDirect");
const eulerianCycleUndirect = require("./eulerianCycleUndirect");

const graph1 = [["1", "0"],["2", "1"],["0", "2"],["0", "3"],["3", "4"],["4", "0"]];

const graph2 = [["A", "B"], ["B", "C"], ["C", "A"]];

const graph3 = [["1", "0"],["2", "1"],["0", "2"],["0", "3"],["4", "3"],["4", "0"]];

const graph4 = [["1", "0"],["2", "1"],["0", "2"],["0", "3"],["4", "3"]];

const graph5 = [["1", "0"],["2", "1"],["0", "2"],["0", "3"],["3", "5"],["4", "3"], ["5", "4"]];

//upper half of seven briges of koenigsberg
const graph6 = [["1","2"], ["1","2"],["2","3"],["1","3"]]; 

// server briges of koenigsberg
const graph7 = [["1","2"],["1","2"], ["2","3"],["1","3"],["3","4"],["1","4"], ["1","4"]]; 

// five room puzzle
const graph8 = [["1","2"],["1","4"],["1","6"],["1","6"],["2","3"],["2","4"],["2","6"],["2","6"],
  ["3","4"],["3","5"],["3","6"],["3","6"],["4","5"],["4","6"],["5","6"],["5","6"]];

console.log("Eulerian Path Test for direct graph 1: ", eulerianPathDirect(graph1));

console.log("Eulerian Path Test for direct graph 2: ", eulerianPathDirect(graph2));

console.log("Eulerian Path Test for direct graph 3: ", eulerianPathDirect(graph3));

console.log("Eulerian Path Test for direct graph 4: ", eulerianPathDirect(graph4));

console.log("Eulerian Path Test for direct graph 5: ", eulerianPathDirect(graph5));

console.log("Eulerian Path Test for undirected graph 1: ", eulerianPathUndirect(graph1));

console.log("Eulerian Path Test for undirected graph 2: ", eulerianPathUndirect(graph2));

console.log("Eulerian Path Test for undirected graph 3: ", eulerianPathUndirect(graph3));

console.log("Eulerian Path Test for undirected graph 4: ", eulerianPathUndirect(graph4));

console.log("Eulerian Path Test for undirected graph 5: ", eulerianPathUndirect(graph5));

console.log("Eulerian Path Test for undirected graph 6: ", eulerianPathUndirect(graph6));

console.log("Eulerian Path Test for undirected graph 'server bridge of koenigsberg': ", eulerianPathUndirect(graph7));

console.log("Eulerian Path Test for undirected graph 'five room puzzle': ", eulerianPathUndirect(graph8));

console.log("Eulerian Cycle Test for directed graph 1: ", eulerianCycleDirect(graph1));

console.log("Eulerian Cycle Test for directed graph 2: ", eulerianCycleDirect(graph2));

console.log("Eulerian Cycle Test for directed graph 3: ", eulerianCycleDirect(graph3));

console.log("Eulerian Cycle Test for directed graph 4: ", eulerianCycleDirect(graph4));

console.log("Eulerian Cycle Test for directed graph 5: ", eulerianCycleDirect(graph5));

console.log("Eulerian Cycle Test for undirected graph 1: ", eulerianCycleUndirect(graph1));

console.log("Eulerian Cycle Test for undirected graph 2: ", eulerianCycleUndirect(graph2));

console.log("Eulerian Cycle Test for undirected graph 3: ", eulerianCycleUndirect(graph3));

console.log("Eulerian Cycle Test for undirected graph 4: ", eulerianCycleUndirect(graph4));

console.log("Eulerian Cycle Test for undirected graph 5: ", eulerianCycleUndirect(graph5));

console.log("Eulerian Cycle Test for undirected graph 6: ", eulerianCycleUndirect(graph6));

console.log("Eulerian Cycle Test for undirected graph 'server bridge of koenigsberg': ", eulerianCycleUndirect(graph7));

console.log("Eulerian Cycle Test for undirected graph 'five room puzzle': ", eulerianCycleUndirect(graph8));

