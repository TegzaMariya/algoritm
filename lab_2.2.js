class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Додавання елемента в кінець списку
  add(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  // Виведення списку (для перевірки)
  printList() {
    let result = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result.join(" ");
  }

  // Перетворення у два циклічних двозв’язних списки
  splitIntoTwoCircularLists() {
    if (this.size % 2 !== 0 || this.size === 0) {
      console.log("Список має бути непорожнім і містити парну кількість елементів.");
      return;
    }

    let mid = this.size / 2;
    let current = this.head;
    for (let i = 1; i < mid; i++) {
      current = current.next;
    }

    let PA = current; // Перший середній елемент
    let PB = current.next; // Другий середній елемент

    // Розділяємо список на дві частини
    let firstHead = this.head;
    let firstTail = PA;
    let secondHead = PB;
    let secondTail = this.tail;

    // Робимо першу частину циклічною
    firstTail.next = firstHead;
    firstHead.prev = firstTail;

    // Робимо другу частину циклічною
    secondTail.next = secondHead;
    secondHead.prev = secondTail;

    console.log("PA (середній елемент першого списку):", PA.data);
    console.log("PB (середній елемент другого списку):", PB.data);

    return { firstHead, secondHead };
  }
}

function main() {
  const list = new DoublyLinkedList();
  let inputData = [1, 2, 3, 4, 5, 6, 7, 8]; // Парна кількість елементів
  inputData.forEach(i => list.add(i));

  console.log("Початковий список:", list.printList());

  const { firstHead, secondHead } = list.splitIntoTwoCircularLists();

  // Перевірка першого циклічного списку
  let firstCycle = [];
  let current = firstHead;
  do {
    firstCycle.push(current.data);
    current = current.next;
  } while (current !== firstHead);
  console.log("Перший циклічний список:", firstCycle.join(" "));

  // Перевірка другого циклічного спискa
  let secondCycle = [];
  current = secondHead;
  do {
    secondCycle.push(current.data);
    current = current.next;
  } while (current !== secondHead);
  console.log("Другий циклічний список:", secondCycle.join(" "));
}

main();