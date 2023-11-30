// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.head) {
            newNode.next = this.head;
            this.head.prev = newNode
        } else {
            this.tail = newNode;
        }
        this.head = newNode
        this.length++;

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // Add node of val to tail of linked list

        let newNode = new DoublyLinkedNode(val);

        if (this.tail) {

            newNode.prev = this.tail
            this.tail.next = newNode;
        } else {
            this.head = newNode;
        }

        this.tail = newNode;
        this.length++

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head

        if (!this.head) return undefined;

        let removeNode = this.head;
        this.head = this.head.next;

        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }

        this.length--;
        return removeNode.value

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        if (!this.tail) return undefined;

        const removeTail = this.tail;
        this.tail = this.tail.prev;

        if(this.tail){
            this.tail.next = null;
        } else {
            this.head = null;
        }

        this.length--;
        return removeTail.value;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node

        return this.head ? this.head.value : undefined

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node

        return this.tail ? this.tail.value : undefined

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
