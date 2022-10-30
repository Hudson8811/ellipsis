"use strict";


// menu burger
const burger = document.querySelector('.burger')
const navbar = document.querySelector('.header-nav__nav')

if (burger) {
  burger.addEventListener('click', function(e) {
    document.body.classList.toggle('lock')
    burger.classList.toggle('active')
    navbar.classList.toggle('active')
  })
}


// click menu
const menuLinks = document.querySelectorAll('.nav-item')

if (menuLinks.length > 0) {
  menuLinks.forEach (link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      if (burger.classList.contains('active')) {
        document.body.classList.remove('lock')
        burger.classList.remove('active')
        navbar.classList.remove('active')
      }
    })
  })
}