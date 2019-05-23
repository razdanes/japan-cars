//Navbar - Dropdown Menu
var dropMenu = document.querySelector('.drop-menu');
var dropDown = document.querySelector('.dropdown');

dropMenu.addEventListener('mouseenter', function () {
  dropDown.classList.toggle('active');
})

//About cars - Dropdown Menu
var carsMenu = document.querySelector('.menucars');
var carsDown = document.querySelector('.dropcars');

carsMenu.addEventListener('mouseenter', function () {
  carsDown.classList.toggle('active');
})

//Collapse Mobile Menu
var mobileBtn = document.querySelector('.mobile-btn');
var menu = document.querySelector('.menu');
var closeBtn = document.querySelector('.close');
var overlay = document.querySelector('.overlay');

mobileBtn.addEventListener('click', function() {
  menu.className += ' open';
  overlay.className += ' open';
})

closeBtn.addEventListener('click', function() {
  menu.className = 'menu';
  overlay.className = 'overlay';
})

window.addEventListener('click', function(event) {
  if(event.target === 'overlay') {
    menu.className = 'menu';
    overlay.className = 'overlay';
  }
})

//Daewoo
var menuDaewoo = document.querySelector('#menu-daewoo');
var dropDaewoo = document.querySelector('#drop-daewoo');

menuDaewoo.addEventListener('click', function () {
  dropDaewoo.classList.toggle('showDaewoo');
})

//Honda
var menuHonda = document.querySelector('#menu-honda');
var dropHonda = document.querySelector('#drop-honda');

menuHonda.addEventListener('click', function () {
  dropHonda.classList.toggle('showHonda');
})

//Mazda
var menuMazda = document.querySelector('#menu-mazda');
var dropMazda = document.querySelector('#drop-mazda');

menuMazda.addEventListener('click', function () {
  dropMazda.classList.toggle('showMazda');
})

//Mitsubishi
var menuMtsb = document.querySelector('#menu-mtsb');
var dropMtsb = document.querySelector('#drop-mtsb');

menuMtsb.addEventListener('click', function () {
  dropMtsb.classList.toggle('showMtsb');
})

//Nissan
var menuNissan = document.querySelector('#menu-nissan');
var dropNissan = document.querySelector('#drop-nissan');

menuNissan.addEventListener('click', function () {
  dropNissan.classList.toggle('showNissan');
})

//Subaru
var menuSubaru = document.querySelector('#menu-subaru');
var dropSubaru = document.querySelector('#drop-subaru');

menuSubaru.addEventListener('click', function () {
  dropSubaru.classList.toggle('showSubaru');
})

//Suzuki
var menuSuzuki = document.querySelector('#menu-suzuki');
var dropSuzuki = document.querySelector('#drop-suzuki');

menuSuzuki.addEventListener('click', function () {
  dropSuzuki.classList.toggle('showSuzuki');
})

//Toyota
var menuToyota = document.querySelector('#menu-toyota');
var dropToyota = document.querySelector('#drop-toyota');

menuToyota.addEventListener('click', function() {
  dropToyota.classList.toggle('showToyota');
})