class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Додавання елемента в кінець списку
  add(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Видалення першого елемента, кратного 5
  removeFirstMultipleOfFive() {
    if (this.head === null) return; // Якщо список порожній

    let current = this.head;
    let prev = null;

    while (current !== null) {
      if (current.data % 5 === 0) {
        if (prev === null) {
          this.head = current.next; // Якщо перший елемент кратний 5
        } else {
          prev.next = current.next; // Якщо будь-який інший елемент кратний 5
        }
        this.size--;
        return; // Видалити лише перший знайдений
      }
      prev = current;
      current = current.next;
    }
  }

  // Додавання 44 перед кожним числом, кратним 7
  insertBeforeMultiplesOfSeven() {
    if (this.head === null) return; // Якщо список порожній

    let current = this.head;
    let prev = null;

    while (current !== null) {
      if (current.data % 7 === 0) {
        const newNode = new Node(44);
        newNode.next = current;
        if (prev === null) {
          this.head = newNode; // Якщо вставляємо перед першим елементом
        } else {
          prev.next = newNode;
        }
        this.size++;
      }
      prev = current;
      current = current.next;
    }
  }

  // Виведення вмісту списку
  printList() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + " ";
      current = current.next;
    }
    return result.trim();
  }
}

function main() {
  const list = new LinkedList();
  let inputData = [10, 15, 18, 10, 7, -4, 20];
  inputData.forEach(i => {
    list.add(i);
  });

  console.log("Початковий список елементів:", list.printList());

  list.removeFirstMultipleOfFive();
  console.log("Список після видалення першого елемента, кратного 5:", list.printList());

  list.insertBeforeMultiplesOfSeven();
  console.log("Список після додавання 44 перед кожним числом, кратним 7:", list.printList());
}

main();