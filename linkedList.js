class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    if (index === 0) {
      this.prepend(value);
      return this;
    }

    const newNode = new Node(value);
    let currentNode = this.head;
    const leader = this.traverseToIndex(index - 1);

    newNode.next = leader.next;
    leader.next = newNode;
    this.length += 1;
    return this;
  }

  remove(index) {
    if (index >= this.length) {
      this.tail = this.traverseToIndex(this.length - 1);
      this.tail.next = null;
      this.length -= 1;
      return this;
    }

    if (index === 0) {
      this.head = this.head.next;
      this.length -= 1;
      return this;
    }
    const leader = this.traverseToIndex(index - 1);
    const nodeToRemove = leader.next;

    leader.next = nodeToRemove.next;
    this.length -= 1;

    return this;
  }

  traverseToIndex(index) {
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === index) return currentNode;
      currentNode = currentNode.next;
    }
  }

  reverse() {
    if (!this.head.next) return this.head;

    let firstItem = this.head;
    this.tail = this.head;
    let secondItem = firstItem.next;

    while (secondItem) {
      const temp = secondItem.next;
      secondItem.next = firstItem;
      firstItem = secondItem;
      secondItem = temp;
    }
    this.head.next = null;
    this.head = firstItem;

    return this;
  }

  toArray() {
    const linkedArray = [];
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      linkedArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return linkedArray;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(11);
myLinkedList.prepend(16);
myLinkedList.insert(2, 18);
myLinkedList.remove(2);
myLinkedList.reverse();

console.log(myLinkedList.toArray());
