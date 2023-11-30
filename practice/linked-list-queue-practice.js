// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity

        let counter = 0;
        let current = this.head;

        while(current){
            counter++
            current = current.next;
        }
        return counter
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        let sum = 0;
        let current = this.head;

        while(current){
            sum += current.value;
            current = current.next
        }

        return sum;

        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {
        // Returns the average value of all the nodes

        return this.sumOfNodes() / this.listLength()

        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        let current = this.head;
        let counter = 0;

        while (current && counter < n){
            current = current.next;
            counter++;
        }

        return current;

        // Write your hypothesis on the time complexity of this method here
    }
    findMid() {
        let slow = this.head;
        let fast = this.head;
        while (fast.next && fast.next.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
        // Time Complexity: O(n)
    }


    reverse() {
        // Returns a new reversed version of the linked list
        // Try implementing it by returning a new linked list then returning
        // the original linked list reversed in place
            // Does the time complexity change? How about space complexity?

        let newHead = null;
        let current = this.head;

        while(current){
            let next = current.next;
            current.next = newHead;
            newHead = current;
            current = next;
        }

        return new SinglyLinkedList(newHead)

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        let prev = null;
        let current = this.head;

        while(current){
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;


        // Write your hypothesis on the time complexity of this method here
    }

}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.tail = head;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        let slow = this.head
        let fast = this.head

        while (fast.next && fast.next.next) {
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }

    reverse() {
        // Returns a new reversed version of the linked list

       let newHead = null
       let current = this.head

       while(current) {
        let prev = current.prev
        current.prev = current.next
        current.next = prev
        newHead = current
        current = current.prev
       }
       return new DoublyLinkedList(newHead)
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        let current = this.head

        while(current) {
            let prev = current.prev
            current.prev = current.next
            current.next = prev

            if (!current.prev) {
                this.head = current
            }
            current = current.prev
        }

        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
