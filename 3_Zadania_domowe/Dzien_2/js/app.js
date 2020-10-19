function Tree (newType) {
  this.type = newType;
}

const tree1 = new Tree("silverBirch");
console.log(tree1);

const tree2 = new Tree("Fir");
console.log(tree2);

const tree3 = new Tree("Oak");
console.log(tree3);

Tree.prototype.bloom = function() {
  console.log(this.type + " is blooming");
}

tree1.bloom();
tree2.bloom();
tree3.bloom();
