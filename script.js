const burger = document.querySelector('.burger');
const navlink = document.querySelector('.navLink');
const nav = document.querySelector('nav');

burger.addEventListener('click', () =>{

  if (navlink.style.maxHeight) {
    navlink.style.maxHeight = null;
    nav.style.backgroundColor = '#F2F2F2';
  } else {
    navlink.style.maxHeight = navlink.scrollHeight + 'px';
    nav.style.backgroundColor = 'rgba(192, 121, 150, 0.774)';
  };


});

