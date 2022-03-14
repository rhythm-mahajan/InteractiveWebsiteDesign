const menu = document.querySelector('#mobileMenu');
const menuLinks = document.querySelector('.navbarMenu');

//Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

//Active Menu Full Screen
const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#Home');
    const aboutMenu = document.querySelector('#AboutUs');
    const servicesMenu = document.querySelector('#Services');
    let scrollPos = window.scrollY;
    // console.log(scrollPos);
  
    // adds 'highlight' class to my menu items
    if (window.innerWidth > 960 && scrollPos < 600) {
      homeMenu.classList.add('highlight');
      aboutMenu.classList.remove('highlight');
      return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
      aboutMenu.classList.add('highlight');
      homeMenu.classList.remove('highlight');
      servicesMenu.classList.remove('highlight');
      return;
    } else if (window.innerWidth > 960 && scrollPos < 2245) {
      servicesMenu.classList.add('highlight');
      aboutMenu.classList.remove('highlight');
      return;
    }
  
    if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
      elem.classList.remove('highlight');
    }
};
  
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close Mobile Menu after click
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
    }
};
  
menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);