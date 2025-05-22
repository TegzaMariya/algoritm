const readline = require("readline");

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(value, priority) {
    this.items.push({ value, priority });
    this.items.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let vertices = ['1', '2', '3', '4', '5', '6'];

let edges = [
  ['1', '2', 3],
  ['1', '5', 3],
  ['2', '3', 7],
  ['2', '4', 8],
  ['3', '4', 1],
  ['3', '6', 1],
  ['4', '6', 10],
  ['4', '5', 5],
  ['5', '6', 2]
];

function dijkstra(vertices, edges, start, end) {
  const distances = {};
  const previous = {};
  const pq = new PriorityQueue();

  for (let v of vertices) {
    distances[v] = Infinity;
    previous[v] = null;
  }

  distances[start] = 0;
  pq.enqueue(start, 0);

  while (!pq.isEmpty()) {
    const { value: current } = pq.dequeue();

    for (let [from, to, weight] of edges) {
      if (from === current) {
        let newDist = distances[current] + weight;
        if (newDist < distances[to]) {
          distances[to] = newDist;
          previous[to] = current;
          pq.enqueue(to, newDist);
        }
      }

      if (to === current) {
        let newDist = distances[current] + weight;
        if (newDist < distances[from]) {
          distances[from] = newDist;
          previous[from] = current;
          pq.enqueue(from, newDist);
        }
      }
    }
  }

  const path = [];
  let current = end;
  while (current) {
    path.unshift(current);
    current = previous[current];
  }

  return {
    path,
    distance: distances[end]
  };
}

const result1 = dijkstra(vertices, edges, '1', '3');
console.log("Шлях від 1 до 3");
console.log("Шлях:", result1.path.join(" -> "));
console.log("Вага:", result1.distance);

rl.question("Введіть початкову вершину: ", function(start) {
  rl.question("Введіть кінцеву вершину: ", function(end) {
    const result2 = dijkstra(vertices, edges, start, end);
    console.log(`Шлях з ${start} до ${end}`);
    console.log("Шлях:", result2.path.join(" -> "));
    console.log("Вага:", result2.distance);
    rl.close();
  });
});