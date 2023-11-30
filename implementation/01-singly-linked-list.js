// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list

       let newNode = new SinglyLinkedNode(val)
       newNode.next = this.head
       this.head = newNode
       this.length++
       return this
        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            
            this.head = newNode;
            this.length++
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        this.length++
        return this;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) return undefined

        let removedHead = this.head
        this.head = this.head.next
        this.length--
        return removedHead

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        if (!this.head) return undefined

        let current = this.head
        let prev = null

        while (current.next) {
            prev = current
            current = current.next
        }

        if (prev) prev.next = null
        else this.head = null

        this.length--
        return current
        

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return the value of head node

        return this.head ? this.head.value : undefined
        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
        let current = this.head

        while(current) {
            console.log(current.value)
            current = current.next
        }

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
