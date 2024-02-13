/*
Insertion:
    1. at start
    2. at end
    3. at position

Traverse:
    1. traverse
    2. get at

Remove:
    1. remove at start
    2. remove at end
    3. remove at position

Emptiness:
    1. isempty();

Size:
    1. getsize();
*/

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    // Insert at beginning
    insertAtBeginning(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }
    // Insert at position
    insertAt(data, index) {
        if (index < 0 || index > 0 && index > this.size) {
            console.log('Invalid index');
            return;
        }
        if (index === 0)
            this.insertAtBeginning(data);
        else {
            let counter = 0;
            let current = this.head;
            let newNode = new Node(data);
            while (counter < index - 1) {
                counter++;
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
            this.size++;
        }
    }
    // Insert at end
    insertAtEnd(data) {
        if (this.head === null)
            this.insertAtBeginning(data);
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new Node(data);
            this.size++;
        }
    }
    // Traverse
    display() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
    // Get at specific position
    getAt(index) {
        let counter = 0;
        let current = this.head;
        while (counter < index) {
            counter++;
            current = current.next;
        }
        console.log(current.data);
    }
    // Get Size
    getSize() {
        console.log(this.size);
    }
    // Check Emptiness
    isEmpty() {
        if (this.head !== null)
            console.log('No');
        else
            console.log('Yes');
    }
}

const list = new LinkedList();
list.insertAtBeginning(400);
// list.insertAtBeginning(300);
// list.insertAtBeginning(200);
// list.insertAtBeginning(100);

// list.insertAtEnd(100);
// list.insertAtEnd(200);
// list.insertAtEnd(300);
// list.insertAtEnd(400);
// list.getSize();
// list.insertAt(12, -4);
// list.getAt(2);
// list.isEmpty();

list.display();
// console.log(list);