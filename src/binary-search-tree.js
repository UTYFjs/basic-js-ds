const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
    // remove line with error and write your code here
  }

  add(data) {
    this.rootNode = addData(this.rootNode, data);

    function addData (node, data){
      if(!node){
        return new Node(data);
      }
      if(node.data === data){
        return node;
      }
      if(data < node.data){
        node.left = addData(node.left, data);
      }else {
        node.right = addData(node.right, data);
      }
      return node;
    }
   
    // remove line with error and write your code here
  }

  has(data) {
    return search(this.rootNode, data);

     function search(node, data){
       if(!node){
         return false;
       }
       if(node.data === data){
         return true;
       }
       if(data < node.data){
         return search(node.left, data);
       }else{
         return search(node.right, data);
       }
     }
    // remove line with error and write your code here
  }

  find(data) {

    let node = this.rootNode;

    while(node){
      if(data< node.data){
        node = node.left;
      }else if(data> node.data){
        node = node.right;
      }else {
        return node;
      }
    }
    return null;
    /*let node = this.rootNode;
    if(!node){
      return null;
    }
    
    function findData(node, data){
      if(!node){
        return null;
      }else if (data<node.data){
         return findData(node.left, data);
      }else if(data>node.data){ 
        return findData(node.right, data); 
      }else{
        return node;
      }
      
      }
    
    let result = findData(node, data);
    return result;*/
    // remove line with error and write your code here
  }

  remove(data) {

    this.rootNode = removeData(this.rootNode, data);

    function removeData(node, data){
      if(!node){
        return null;
      }
      if( data< node.data){
        node.left = removeData(node.left, data);
        return node;
      } else if(data> node.data){
        node.right = removeData(node.right, data);
        return node;
      } else{
      if(!node.left && !node.right){
        return null;
      }
      if(!node.left){
        node =node.right;
        return node;
      }
      if (!node.right){
        node = node.left;
        return node;
      }
      let minRight = node.right;
      while(minRight.left){
        minRight = minRight.left;
      } 
      node.data = minRight.data;
      node.right = removeData(node.right, minRight.data);
      return node;
    }
  }
    // remove line with error and write your code here
  }

  min() {
    if(!this.rootNode){
      return null;
    }
    let minElem = this.rootNode;
    while(minElem.left){
      minElem=minElem.left;
    }
    return minElem.data;
    // remove line with error and write your code here
  }

  max() {
    if(!this.rootNode){
      return null;
    }
    let maxElem = this.rootNode;
    while(maxElem.right){
      maxElem=maxElem.right;
    }
    return maxElem.data;
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};