'use strict'

// Make navbar transparent when it is on th top
const navbar = document.querySelector('#navbar');

const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  // console.log(window.scrollY);
  // console.log('navbarHeight: ${navbarHeight}');
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
})

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if(link == null) { 
    return;
  } 

  console.log(event.target.dataset.link); // 링크가 있어야 클릭이 됨//
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior: 'smooth'});

});