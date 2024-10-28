'use strict';

// 
const nav = document.querySelector('.navbar-nav');
const navLinks = document.querySelectorAll('.nav-link');
const cartToggleBtn = document.querySelector('.shopping-cart-btn');
const navToggleBtn = document.querySelector('.menu-toggle-btn');
const shoppingCart = document.querySelector('.cart-box');



// Функція перемикання навігації
const navToggleFunc = function () {
  nav.classList.toggle('active');
  navToggleBtn.classList.toggle('active');
}

// Функція перемикання кошика
const cartToggleFunc = function () { 
  shoppingCart.classList.toggle('active') 
}



// Додавання події на кнопку перемикача навігації
navToggleBtn.addEventListener('click', function () {

  // Якщо кошик має клас `active`, він буде видалений.
  if (shoppingCart.classList.contains('active')) cartToggleFunc();

  navToggleFunc();

});

// Додавання події на кнопку перемикача кошика
cartToggleBtn.addEventListener('click', function () {

  // Якщо навігація має клас `active`, він буде видалений.
  if (nav.classList.contains('active')) navToggleFunc();

  cartToggleFunc();

});

// Додавання події на всі посилання навігації
for (let i = 0; i < navLinks.length; i++) {

  navLinks[i].addEventListener('click', navToggleFunc);

}
