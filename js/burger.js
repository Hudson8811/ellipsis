"use strict";


// menu burger
const burger = document.querySelector('.burger')
// const navbar = document.querySelector('.header-nav__nav')
const navbar = document.querySelector('.mobile__wrapper')

if (burger) {
  burger.addEventListener('click', function(e) {
    document.body.classList.toggle('lock')
    burger.classList.toggle('active')
    navbar.classList.toggle('active')
  })
}

// click select item
const mobileItems = document.querySelectorAll('.mobile-item__select')

if (mobileItems.length > 0) {
  mobileItems.forEach (item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active')
    })
  })
}


// click link
const mobileLinks = document.querySelectorAll('.mobile__link')

if (mobileLinks.length > 0) {
  mobileLinks.forEach (link => {
    link.addEventListener('click', function(e) {
      if (burger.classList.contains('active')) {
        document.body.classList.remove('lock')
        burger.classList.remove('active')
        navbar.classList.remove('active')
      }
    })
  })
}