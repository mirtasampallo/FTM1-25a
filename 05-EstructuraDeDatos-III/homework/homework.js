'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

  BinarySearchTree.prototype.insert = function(value) {

    if(value > this.value) { 
      if(!this.right) { 
       var nuevo = new BinarySearchTree(value);
       this.rigth = nuevo;
      } else {
         this.rigth.insert(value);
  }
        } else {  

    if(!this.left) {  
      var nuevo = new BinarySearchTree(value);

    this.left = nuevo;
       } else {

    this.left.insert(value);

  }
}
}


  BinarySearchTree.prototype.contains = function() {}

  BinarySearchTree.prototype.depthFirstForEach = function() {}


  BinarySearchTree.prototype.breadthFirstForEach = function() {}

  BinarySearchTree.prototype.size = function() {
    
    if(this.left === null && this.rigth === null) return 1;
    if(this.rigth && !this.left)
    return 1 + this.rigth.size();
    if(!this.rigth && this.left);
    return 1 + this.left.size();
    return 1 + this.left + this.size() + this.rigth.size();



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
