const { ListNode } = require('../extensions/list-node.js')
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.start = null
    this.length = 0
  }
  getUnderlyingList() {
    return this.start
  }
  enqueue(value) {
    if (this.length === 0) {
      this.start = new ListNode(value)
    } else {
      let actual = this.start
      while (actual.next) {
        actual = actual.next
      }
      actual.next = new ListNode(value)
    }
    this.length++
  }
  dequeue() {
    if (this.start) {
      let element = this.start.value
      this.start = this.start.next
      this.length--
      return element
    }
    return null
  }
}
