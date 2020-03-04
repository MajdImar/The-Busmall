'use strict';

// Cart constructor.
var Cart = function(items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};

Cart.prototype.addItem = function(product, quantity) {
  // TODO: Fill in this instance method to create a new CartItem and add it to this.items
};

Cart.prototype.saveToLocalStorage = function() {
  // TODO: Fill in this instance method to save the contents of the cart to localStorage
};

Cart.prototype.removeItem = function(item) {
  // TODO: Fill in this instance method to remove one item from the cart.
  // Note: You will have to decide what kind of parameter to pass in here!
};

var CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product contructor.
var Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};
Product.allProducts = [];

function generateCatalog() {
  new Product('images/bag.jpg', 'Bag');
  new Product('images/banana.jpg', 'Banana');
  new Product('images/bathroom.jpg', 'Bathroom');
  new Product('images/boots.jpg', 'Boots');
  new Product('images/breakfast.jpg', 'Breakfast');
  new Product('images/bubblegum.jpg', 'Bubblegum');
  new Product('images/chair.jpg', 'Chair');
  new Product('images/cthulhu.jpg', 'Cthulhu');
  new Product('images/dog-duck.jpg', 'Dog-Duck');
  new Product('images/dragon.jpg', 'Dragon');
  new Product('images/pen.jpg', 'Pen');
  new Product('images/pet-sweep.jpg', 'Pet Sweep');
  new Product('images/scissors.jpg', 'Scissors');
  new Product('images/shark.jpg', 'Shark');
  new Product('images/sweep.png', 'Sweep');
  new Product('images/tauntaun.jpg', 'Taun-Taun');
  new Product('images/unicorn.jpg', 'Unicorn');
  new Product('images/usb.gif', 'USB');
  new Product('images/water-can.jpg', 'Water Can');
  new Product('images/wine-glass.jpg', 'Wine Glass');
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();
