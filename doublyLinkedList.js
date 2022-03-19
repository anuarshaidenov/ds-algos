class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
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
    const leader = this.traverseToIndex(index - 1);
    const holder = leader.next;

    newNode.next = holder;
    newNode.prev = leader;
    holder.prev = newNode;
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
      this.head.prev = null;
      this.length -= 1;
      return this;
    }
    const leader = this.traverseToIndex(index - 1);
    const nodeToRemove = leader.next;
    const follower = nodeToRemove.next;

    leader.next = nodeToRemove.next;
    follower.prev = leader;
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

const myLinkedList = new DoublyLinkedList(5);
myLinkedList.append(10);
myLinkedList.append(109);
myLinkedList.append(13);
myLinkedList.prepend(12);
myLinkedList.remove(13);

console.log(myLinkedList.toArray());
