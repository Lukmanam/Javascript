// asyncFunction1(arg1, function(err, result1) {
//     if (err) {
//       handleError(err);
//     } else {
//       asyncFunction2(result1, function(err, result2) {
//         if (err) {
//           handleError(err);
//         } else {
//           asyncFunction3(result2, function(err, result3) {
//             if (err) {
//               handleError(err);
//             } else {
//               // More nested callbacks...
//             }
//           });
//         }
//       });
//     }
//   });

// const promise=new Promise((resolve,reject)=>{
//     const functions=function1()
//     if(functions)
//     {
//         resolve('res')
//     }
//     else
//     {
//         reject('rej')
//     }
// })

// promise.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(data) {
      const newNode = new Node(data);
      
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }

    deleteNode(){
        
    }
  
    search(node, data) {
      if (node === null) {
        return null;
      }
  
      if (data < node.data) {
        return this.search(node.left, data);
      } else if (data > node.data) {
        return this.search(node.right, data);
      } else {
        return node;
      }
    }
  
    // Helper method to remove a node from the BST
    remove(data) {
      this.root = this.removeNode(this.root, data);
    }
  
    removeNode(node, key) {
      if (node === null) {
        return null;
      }
  
      if (key < node.data) {
        node.left = this.removeNode(node.left, key);
        return node;
      } else if (key > node.data) {
        node.right = this.removeNode(node.right, key);
        return node;
      } else {
        // Node with only one child or no child
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }
  
        // Node with only one child
        if (node.left === null) {
          node = node.right;
          return node;
        } else if (node.right === null) {
          node = node.left;
          return node;
        }
  
        // Node with two children
        const aux = this.findMinNode(node.right);
        node.data = aux.data;
        node.right = this.removeNode(node.right, aux.data);
        return node;
      }
    }
  
    // Helper method to find the node with minimum value
    // starting from a given node
    findMinNode(node) {
      if (node.left === null) {
        return node;
      } else {
        return this.findMinNode(node.left);
      }
    }
  
    // Helper method to traverse the BST in-order
    inOrder(node) {
      if (node !== null) {
        this.inOrder(node.left);
        console.log(node.data);
        this.inOrder(node.right);
      }
    }
  
    // Helper method to traverse the BST pre-order
    preOrder(node) {
      if (node !== null) {
        console.log(node.data);
        this.preOrder(node.left);
        this.preOrder(node.right);
      }
    }
  
    // Helper method to traverse the BST post-order
    postOrder(node) {
      if (node !== null) {
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.data);
      }
    }
  }
  
  // Example usage:
  const bst = new BinarySearchTree();
  
  // Insert nodes
  bst.insert(15);
  bst.insert(25);
  bst.insert(10);
  bst.insert(7);
  bst.insert(22);
  bst.insert(17);
  bst.insert(13);
  bst.insert(5);
  bst.insert(9);
  bst.insert(27);
  
  // Remove a node
  bst.remove(15);
  
  // Traverse the BST
  console.log('Inorder traversal:');
  bst.inOrder(bst.root);
  
  console.log('Preorder traversal:');
  bst.preOrder(bst.root);
  
  console.log('Postorder traversal:');
  bst.postOrder(bst.root);
  