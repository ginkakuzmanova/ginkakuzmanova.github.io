"use strict";
const navMenu = document.getElementById('nav-menu'),
  toggleMenu = document.getElementById('nav-toggle'),
  closeMenu = document.getElementById('nav-close')

toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show')
})

closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show')
})

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

document.querySelectorAll('.nav__link').forEach(item =>
  item.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.active').classList.remove('active');
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    e.target.classList.add('active');
  }))
