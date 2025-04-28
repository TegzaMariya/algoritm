class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function inOrderTraversal(node) {
  if (node !== null) {
    inOrderTraversal(node.left);

    console.log("Значення вузла:", node.value);

    if (node.value % 2 === 0) {
      evenCount++;
    }

    const hasOnlyOneChild =
      (node.left === null && node.right !== null) ||
      (node.left !== null && node.right === null);

    if (hasOnlyOneChild) {
      console.log("Вузол з одним нащадком:", node.value);
    }

    inOrderTraversal(node.right);
  }
}

let root = new Node(10);
root.left = new Node(5);
root.right = new Node(20);

root.left.left = new Node(2);
root.left.right = new Node(7);
root.left.right.right = new Node(8);

root.right.left = new Node(15);
root.right.right = new Node(25);
root.right.right.right = new Node(30);

let evenCount = 0;

console.log("Симетричний обхід дерева");
inOrderTraversal(root);

console.log("Кількість парних елементів:", evenCount);