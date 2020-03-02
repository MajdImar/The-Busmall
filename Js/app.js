
var images = [
    "bag.jpg",
    "banana.jpg",
    "bathroom.jpg",
    "boots.jpg",
    "breakfast.jpg",
    "bubblegum.jpg",
    "chair.jpg",
    "pet-sweep.jpg",
    "scissors.jpg",
    "shark.jpg",
    "sweep.png",
    "tauntaun.jpg",
    "unicorn.jpg",
    "usb.gif",
    "water-can.jpg",
    "wine-glass.jpg",
    "dog-duck.jpg",
    "cthulhu.jpg",
    "dragon.jpg",
    "pen.jpg"


];
var leftImage = document.querySelector('#leftImage');
var rightImage = document.querySelector('#rightImage');
var centerImage = document.querySelector('#centerimage');
var imageSection = document.querySelector('#mainpictures');

function Products(name) {
    this.name = name;
    this.clicks = 0;
    this.views = 0;
    this.imagePath = `images/${this.name}`;
    Products.all.push(this);
}
Products.all = [];


for (var i = 0; i < images.length; i++) {
    new Products(images[i]);
}
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var leftproduct, centerproduct, rightproduct;
function runder() {

    leftproduct = Products.all[randomNumber(0, Products.all.length - 1)];
    //console.log(leftproduct);
    centerproduct = Products.all[randomNumber(0, Products.all.length - 1)];
    //console.log(centerproduct);
      rightproduct = Products.all[randomNumber(0, Products.all.length - 1)];
  
      while(leftproduct.name===centerproduct.name|| leftproduct.name===rightproduct.name || rightproduct.name===centerproduct.name ){
   
        leftproduct = Products.all[randomNumber(0, Products.all.length - 1)];
    centerproduct = Products.all[randomNumber(0, Products.all.length - 1)];
    rightproduct = Products.all[randomNumber(0, Products.all.length - 1)];
   }
//console.log(leftproduct.imagepath===centerproduct.imagePath );
//console.log(leftproduct.imagePath===rightproduct.imagePath );
//console.log(rightproduct.imagePath===centerproduct.imagePath );
    leftImage.setAttribute('src', leftproduct.imagePath);
    leftImage.setAttribute('alt', leftproduct.name);
    leftImage.setAttribute('title', leftproduct.name);

    centerImage.setAttribute('src', centerproduct.imagePath);
    centerImage.setAttribute('alt', centerproduct.name);
    centerImage.setAttribute('title', centerproduct.name);

    rightImage.setAttribute('src', rightproduct.imagePath);
    rightImage.setAttribute('alt', rightproduct.name);
    rightImage.setAttribute('title', rightproduct.name);

}
runder();
imageSection.addEventListener('click',handleClickOnProduct);
var totalClicks =0;
function handleClickOnProduct(event) {
  if(totalClicks <25 ) {
 
    if(event.target.id !== 'mainpictures') {
      if(event.target.id === 'leftImage') {
        leftproduct.clicks++;
      }
      else if(event.target.id === 'centerimage') {
        centerproduct.clicks++;
      } else if(event.target.id === 'rightImage') {
        rightproduct.clicks++;
      }
      
      totalClicks++;
      leftproduct.views++;
      rightproduct.views++;
      centerproduct.views++;
      runder();
    }
  }  else {
  alert('more than 25 clicks');
    imageSection.removeEventListener('click',handleClickOnProduct);
    render2();
  }
}

function render2() {
  var ulE1 = document.getElementById('Score');
  for (var i =0; i<Products.all.length ; i++) {
    var liE1 = document.createElement('li');
    liE1.textContent = `${Products.all[i].name} has ${Products.all[i].clicks} clicks and ${Products.all[i].views} views`;
    ulE1.appendChild(liE1);
  }
}

