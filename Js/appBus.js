var seq=[];
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

//to create new object 
for (var i = 0; i < images.length; i++) {
  new Products(images[i]);
}
//generate random number
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//to convert the object to json so the server can understand it

function updateProducts() {
  var productupdate = JSON.stringify(Products.all);
  localStorage.setItem('objectorders', productupdate);
}

//to convert the object to json so from the  server 
function getProducts() {
  var productupdate = localStorage.getItem('objectorders');

  if (productupdate) {
    Products.all = JSON.parse(productupdate);

    runder();

    render2();
    render3();

  }
}



//show 3 different images
var leftproduct, centerproduct, rightproduct;
function runder() {

  leftproduct = Products.all[randomNumber(0, Products.all.length - 1)];
  //console.log(leftproduct);
  centerproduct = Products.all[randomNumber(0, Products.all.length - 1)];
  //console.log(centerproduct);
  rightproduct = Products.all[randomNumber(0, Products.all.length - 1)];

  while (leftproduct.name === centerproduct.name || leftproduct.name === rightproduct.name || rightproduct.name === centerproduct.name
    ) {

      console.log(leftproduct.name);
    leftproduct = Products.all[randomNumber(0, Products.all.length - 1)];
    centerproduct = Products.all[randomNumber(0, Products.all.length - 1)];
    rightproduct = Products.all[randomNumber(0, Products.all.length - 1)];
  }
  
  // runder();
  //   
  // || seq.includes(leftProduct.name )|| seq.includes(centerProduct.name) ||seq.includes(rightProduct.name)

  leftImage.setAttribute('src', leftproduct.imagePath);
  leftImage.setAttribute('alt', leftproduct.name);
  leftImage.setAttribute('title', leftproduct.name);

  centerImage.setAttribute('src', centerproduct.imagePath);
  centerImage.setAttribute('alt', centerproduct.name);
  centerImage.setAttribute('title', centerproduct.name);

  rightImage.setAttribute('src', rightproduct.imagePath);
  rightImage.setAttribute('alt', rightproduct.name);
  rightImage.setAttribute('title', rightproduct.name);

  // seq[0] = leftProduct.imagePath;
  // console.log(seq);
  // // seq[1] = centerProduct.name;
  // // seq[2] = rightProduct.name;

}
runder();
//count the views and clicks after the event click
imageSection.addEventListener('click', handleClickOnProduct);
var totalClicks = 0;
function handleClickOnProduct(event) {
  if (totalClicks < 25) {

    if (event.target.id !== 'mainpictures') {
      if (event.target.id === 'leftImage') {
        leftproduct.clicks++;
      }
      else if (event.target.id === 'centerimage') {
        centerproduct.clicks++;
      } else if (event.target.id === 'rightImage') {
        rightproduct.clicks++;
      }

      totalClicks++;
      leftproduct.views++;
      rightproduct.views++;
      centerproduct.views++;
      updateProducts();
      runder();
    }
  } else {
    alert('more than 25 clicks');
    imageSection.removeEventListener('click', handleClickOnProduct);
    //  render2();
    render3();
    updateProducts();
  }

}
//sshow result in list

function render2() {
  var ulE1 = document.getElementById('Score');
  for (var i = 0; i < Products.all.length; i++) {
    var liE1 = document.createElement('li');
    liE1.textContent = `${Products.all[i].name} has ${Products.all[i].clicks} clicks and ${Products.all[i].views} views`;
    ulE1.appendChild(liE1);
  }

}
var contct = [];
var cliccks = [];
var names = [];
var votes = [];
//show result in chart
function render3() {

  for (var i = 0; i < Products.all.length; i++) {
    //console.log(Products.all[i])
    var contct = Products.all[i];
    names.push(contct.name);
    cliccks.push(contct.clicks);
    votes.push(contct.views);

  }

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        label: '# of clicks',
        data: cliccks,

        backgroundColor:
          'rgba(255, 99, 132, 0.2)',


        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],

        borderWidth: 1
      },
      {
        label: '# views',
        data: votes,

        backgroundColor:
          'rgba(40, 99, 132, 0.2)',


        borderColor: [
          'rgba(150, 30, 40, 1)',
          'rgba(30, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],

        borderWidth: 1
      }]


    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  })
}
getProducts();