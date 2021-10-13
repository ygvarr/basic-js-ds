const { Node } = require('../extensions/list-tree.js')
module.exports = class BinarySearchTree {
  constructor() {
    this.rootNode = null
  }
  root() {
    return this.rootNode
  }
  add(data) {
    let newNode = new Node(data)
    if (this.rootNode === null) this.rootNode = newNode
    else this.addNode(this.rootNode, newNode)
    return this
  }
  addNode(root, newNode) {
    if (newNode.data < root.data) {
      root.left === null
        ? (root.left = newNode)
        : this.addNode(root.left, newNode)
    } else {
      root.right === null
        ? (root.right = newNode)
        : this.addNode(root.right, newNode)
    }
  }
  has(data) {
    return this.search(this.rootNode, data) != null
  }
  search(root, data) {
    if (root === null) return null
    else if (data < root.data) return this.search(root.left, data)
    else if (data > root.data) return this.search(root.right, data)
    else return root
  }
  find(data) {
    return this.search(this.rootNode, data)
  }
  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data)
    return this
  }
  removeNode(root, data) {
    if (root === null) return null
    else if (data < root.data) root.left = this.removeNode(root.left, data)
    else if (data > root.data) root.right = this.removeNode(root.right, data)
    else {
      if (root.left === null && root.right === null) root = null
      else if (root.left === null) root = root.right
      else if (root.right === null) root = root.left
      else {
        let newNode = this.minNode(root.right)
        root.data = newNode.data
        root.right = this.removeNode(root.right, newNode.data)
      }
    }
    return root
  }
  minNode(root) {
    if (root.left === null) return root
    else return this.minNode(root.left)
  }
  maxNode(root) {
    if (root.right === null) return root
    else return this.maxNode(root.right)
  }
  min() {
    if (!this.rootNode) return null
    return this.minNode(this.rootNode).data
  }
  max() {
    if (!this.rootNode) return null
    return this.maxNode(this.rootNode).data
  }
}
